export function isNum(e, mode='bill') {
  e = e || window.event
  const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which

  if (mode == 'bill' && ((charCode != 46) && (charCode < 48 || charCode > 57)))
    e.preventDefault()
  else if (mode == 'pt' && (charCode < 48 || charCode > 57))
    e.preventDefault()
}
