<template>
  <div id="dealersMap" class="dealers-map-container"></div>
</template>

<script>
import { mapState } from 'vuex'
import BalloonContentLayoutTemplate from './BalloonContentLayoutTemplate'

let map = null
let objectManager = null

export default {
  name: 'YaMap',
  computed: {
    ...mapState({
      dealers: (state) => state.dealers.dealers
    })
  },
  async mounted() {
    await this.$store.dispatch('dealers/getDealers')
    const root = this
    await window.ymaps.ready(function() {
      map = new window.ymaps.Map(
        'dealersMap',
        {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [53.76, 39.64],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 3
        },
        {
          suppressMapOpenBlock: true,
          balloonAutoPanMargin:
            innerWidth > 767 ? [100, 0, 0, 700] : [0, 0, 0, 0]
        }
      )
      window.map = map
      map.behaviors.disable('scrollZoom')

      objectManager = new window.ymaps.ObjectManager({
        clusterize: true,
        clusterIconColor: '#ffffff',
        clusterPreset: 'islands#redCircleIcon',
        clusterOutline: false
      })

      map.events.add(['click'], root.handleMapClick)

      window.objectManager = objectManager
      objectManager.objects.events.add(['click'], root.beforeOpenBalloon)
      map.geoObjects.add(objectManager)
      map.controls.remove('searchControl')
      map.controls.remove('trafficControl')
      map.controls.remove('fullscreenControl')
      map.controls.remove('typeSelector')
      map.controls.remove('rulerControl')
      map.controls.remove('zoomControl')
      map.controls.remove('geolocationControl')
      map.controls.add('zoomControl', {
        position: { right: '66px', top: '330px' },
        size: 'small'
      })
      map.controls.add('geolocationControl', {
        position: { right: '66px', top: '147px' }
      })

      root.updateMap()
    })
  },
  async beforeDestroy() {
    if (map !== null) {
      await map.destroy()
      map = {}
    }
  },
  methods: {
    async beforeOpenBalloon() {
      this.handleMapClick()
      if (innerWidth > 1300) {
        await map.options.set({ balloonAutoPanMargin: [100, 0, 0, 700] })
      } else if (innerWidth > 1024) {
        await map.options.set({ balloonAutoPanMargin: [100, 0, 0, 500] })
      } else if (innerWidth > 767) {
        await map.options.set({ balloonAutoPanMargin: [100, 0, 0, 450] })
      } else {
        await map.options.set({ balloonAutoPanMargin: [0, 0, 0, 0] })
      }
      // const dealerIndex = this.dealers.findIndex((el) => el.id === objectId)
      // if (dealerIndex > -1)
      //   await map.setCenter([
      //     this.dealers[dealerIndex].coordinates.lat,
      //     this.dealers[dealerIndex].coordinates.lon
      //   ])
    },
    async openBalloon(objectId) {
      await this.beforeOpenBalloon()
      if (innerWidth > 1300) {
        await objectManager.objects.balloon.open(objectId)
      } else if (innerWidth > 1024) {
        await objectManager.objects.balloon.open(objectId)
      } else if (innerWidth > 767) {
        await objectManager.objects.balloon.open(objectId)
      } else {
        await objectManager.objects.balloon.open(objectId)
      }
      // const dealerIndex = this.dealers.findIndex((el) => el.id === objectId)
      // if (dealerIndex > -1)
      //   await map.setCenter([
      //     this.dealers[dealerIndex].coordinates.lat,
      //     this.dealers[dealerIndex].coordinates.lon
      //   ])
    },
    async mapZoom() {
      const objectsFrame = objectManager.getPixelBounds()
      const mapFrame = map.getGlobalPixelBounds()
      if (objectsFrame && mapFrame) {
        const latObjectAlpha =
          Math.max(objectsFrame[0][0], objectsFrame[1][0]) -
          Math.min(objectsFrame[0][0], objectsFrame[1][0])
        const lonObjectAlpha =
          Math.max(objectsFrame[0][1], objectsFrame[1][1]) -
          Math.min(objectsFrame[0][1], objectsFrame[1][1])
        const latMapAlpha =
          Math.max(mapFrame[0][0], mapFrame[1][0]) -
          Math.min(mapFrame[0][0], mapFrame[1][0])
        const lonMapAlpha =
          Math.max(mapFrame[0][1], mapFrame[1][1]) -
          Math.min(mapFrame[0][1], mapFrame[1][1])
        if (latObjectAlpha > latMapAlpha || lonObjectAlpha > lonMapAlpha) {
          if (map.getZoom() > 2) {
            await map.setZoom(map.getZoom() - 1)
            this.mapZoom()
          }
          return null
        } else {
          let objectFrameCenterLat =
            Math.max(objectsFrame[0][0], objectsFrame[1][0]) -
            latObjectAlpha / 2
          const objectFrameCenterLon =
            Math.max(objectsFrame[0][1], objectsFrame[1][1]) -
            lonObjectAlpha / 2
          if (innerWidth > 767) objectFrameCenterLat -= 200
          map.setGlobalPixelCenter([objectFrameCenterLat, objectFrameCenterLon])
        }
      }
    },
    async updateMap() {
      const points = {
        type: 'FeatureCollection',
        features: []
      }
      objectManager.removeAll()
      this.dealers.forEach((dealer) => {
        points.features.push({
          type: 'Feature',
          id: dealer.id,
          geometry: {
            type: 'Point',
            coordinates: [
              Number(dealer.coordinates.lat),
              Number(dealer.coordinates.lon)
            ]
          },
          properties: {
            balloonContentBody: BalloonContentLayoutTemplate(dealer)
          },
          options: {
            preset: 'islands#circleIcon',
            iconColor: '#ffffff'
          }
        })
      })
      await objectManager.add(points)
      this.mapZoom()
    },
    handleMapClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss">
.dealers-map-container {
  width: 100%;
  top: 0;
  left: 0;
  height: 631px;
  &.m-home {
    height: 631px;
    @media (--xsm) {
      height: 516px;
    }
  }
  &.m-network {
    height: 822px;
    @media (--xsm) {
      height: 516px;
    }
  }
  .ymaps-2-1-76-controls-pane {
    @media (--xsm) {
      bottom: 40px !important;
      right: 20px !important;
      top: auto !important;
      left: auto !important;
      width: 28px !important;
      height: 61px !important;
    }
  }
  .ymaps-2-1-76-controls__control {
    @media (--xsm) {
      bottom: 0px !important;
      right: 0px !important;
      top: 0px !important;
      left: 0px !important;
      width: 28px !important;
      height: 61px !important;
    }
  }
  .ymaps-2-1-76-controls__control.ymaps-2-1-76-user-selection-none {
    @media (--xsm) {
      display: none !important;
    }
  }
  .ymaps-2-1-76-zoom {
    @media (--xsm) {
      padding: 0;
      width: 100% !important;
      height: 100% !important;
    }
  }
}

[class*='ymaps-2'][class*='-ground-pane'] {
  -webkit-filter: invert(100%) grayscale(100%) contrast(100%) brightness(0.8);
}
ymaps {
  &[class*='-balloon__content'] {
    background-color: $ya-baloon-bg;
    padding: 0;
    margin-right: 0 !important;
    ymaps {
      height: unset !important;
      overflow: hidden !important;
    }
  }
  &[class*='-balloon__close'] {
    position: absolute;
    right: 0;
    top: 0;
  }

  &[class*='-balloon__tail'] {
    background-color: $ya-baloon-bg;
    &:after {
      background-color: $ya-baloon-bg;
    }
  }
}
.cardPoint {
  width: 400px;
  background-color: #555e65;
  position: relative;
  @media (--xsm) {
    width: 280px;
  }
  &:after {
    content: '';
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 7px 0 7px;
    border-color: #555e65 transparent transparent transparent;
  }

  &__content {
    padding: 24px 16px 32px 16px;
  }
  &__image {
    background-size: 100%;
    height: 225px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (--xsm) {
      height: 175px;
    }
  }
  &__name {
    margin-bottom: 8px;
  }
  &__address {
    margin-bottom: 16px;
    color: #969fa3;
  }
  &__contact {
    display: flex;

    .svg-phone {
      font-size: 13px;
    }
    .svg-mail {
      font-size: 9px;
    }
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &__icon {
    margin-right: 8px;
    .svg {
      fill: #969fa3;
    }
  }
}
</style>
