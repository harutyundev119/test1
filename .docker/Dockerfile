FROM node:12 as build

WORKDIR /usr/src/lecar/

COPY package.json .
RUN npm i

COPY . .

ARG API_URL
ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV
ENV API_URL=$API_URL


RUN npm run build
CMD npm run start

#RUN npm run generate

#FROM nginx:1.17-alpine
#
#COPY --from=build /usr/src/lecar/dist /usr/share/nginx/html
#COPY --from=build /usr/src/lecar/.docker/nginx /etc/nginx

