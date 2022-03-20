export function isNum(e, mode='bill') {
  const charCode = (typeof e.which == "undefined") ? e.key : e.which
  if ((mode == 'bill' && (charCode != 46 && (charCode < 48 || charCode > 57)))
    || (mode == 'pt' && (charCode < 48 || charCode > 57)))
    e.preventDefault()
}
