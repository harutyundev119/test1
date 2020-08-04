const setCaretPosition = function setCaretPosition(ctrl, start, end = start) {
  // IE >= 9 and other browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus()
    ctrl.setSelectionRange(start, end)
  }
  // IE < 9
  else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange()
    range.collapse(true)
    range.moveEnd('character', end)
    range.moveStart('character', start)
    range.select()
  }
}

export default {
  set: setCaretPosition
}
