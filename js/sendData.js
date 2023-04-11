export const sendData = () => {
	const title = document.querySelector('#title').textContent
	const price = document.querySelector('#price').textContent
	const size = document.querySelector('input[type="radio"]:checked').value
	const variant = document.querySelector('#select').value
	const quantity = document.querySelector('#quantity').textContent

	const popup = document.querySelector('#popup')
	const popupBtn = document.querySelector('#popup-btn')
	const overlay = document.querySelector('#popup-overlay')

	const data = {
		title,
		price,
		size,
		variant,
		quantity,
	}

	if (quantity > 0) {
		fetch('/save-data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (response.ok) {
					console.log('Dane wysłane', data)
				} else {
					console.log('Wystąpił błąd', data)
				}
			})
			.catch(error => {
				console.log(error)
			})
		popup.style.display = 'none'
		overlay.classList.remove('popup-overlay')
		popupBtn.style.zIndex = 1
	}
}
