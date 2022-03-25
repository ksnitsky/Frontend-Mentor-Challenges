const voteSt = document.querySelector('#vote-form')
const thanksSt = document.querySelector('#thanks-form')
const errorMsg = document.querySelector('#error')

document.querySelector('#submit').onclick = () => {
  const selected =
    document.querySelector('input[type=radio][name=mark]:checked')

  if (selected) {
    voteSt.classList.contains('hidden') || voteSt.classList.add('hidden')
    thanksSt.classList.contains('hidden') && thanksSt.classList.remove('hidden')
    return insertSelection(selected.value)
  }
  errorMsg.classList.contains('hidden') && errorMsg.classList.remove('hidden')
}

function insertSelection(value) {
  document.querySelector('#YouSelected').innerHTML = `
    You selected ${value} out of 5
  `
  return true
}
