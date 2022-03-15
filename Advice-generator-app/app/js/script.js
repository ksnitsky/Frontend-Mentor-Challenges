const uri = 'https://api.adviceslip.com/advice'

document.querySelector('#advice-content').innerHTML = `Press button below for getting advice.`

document.querySelector('.dice-button').onclick = async () => {
	const data = await fetch(uri)
		.then(response => response.json())
		.then(data => { return data })
		.catch(err => console.log(err))
	document.querySelector('#advice-id').innerHTML = `#${data['slip']['id']}`
	document.querySelector('#advice-content').innerHTML = `${data['slip']['advice']}`
}
