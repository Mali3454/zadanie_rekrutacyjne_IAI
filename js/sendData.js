// This function gets executed when called
export const sendData = () => {
	// The code gets references to HTML elements
	const title = document.querySelector('#title').textContent
	const price = document.querySelector('#price').textContent
	const size = document.querySelector('input[type="radio"]:checked').value
	const variant = document.querySelector('#select').value
	const quantity = document.querySelector('#quantity').textContent

	const popup = document.querySelector('#popup')
	const popupBtn = document.querySelector('#popup-btn')
	const overlay = document.querySelector('#popup-overlay')

	// Create an object with data to send to the server
	const data = {
		title,
		price,
		size,
		variant,
		quantity,
	}

	// Check if quantity is greater than 0 before sending the data
	if (quantity > 0) {
		// Send data to the server using the fetch API with POST method
		fetch('/save-data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				// Log response message to the console based on the HTTP status code
				if (response.ok) {
					console.log('Dane wysłane', data)
				} else {
					console.log('Wystąpił błąd', data)
				}
			})
			.catch(error => {
				// Log error to the console if there's an error in sending the data
				console.log(error)
			})

		// Hide popup after sending the data
		popup.style.display = 'none'
		overlay.classList.remove('popup-overlay')
		popupBtn.style.zIndex = 1
	}
}
