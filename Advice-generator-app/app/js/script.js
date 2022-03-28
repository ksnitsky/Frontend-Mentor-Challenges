document.querySelector('#advice-content').innerHTML = `Press button below for getting advice.`

document.querySelector('.dice-button').onclick = async () => {
	try {
		const uri = 'https://api.adviceslip.com/advice'
		const res = await fetch(uri)
		const data = await res.json()
		document.querySelector('#advice-id').innerHTML = `#${data.slip.id}`
		document.querySelector('#advice-content').innerHTML = `${data.slip.advice}`
	} catch(err) {
		console.error(err)
	}
}
