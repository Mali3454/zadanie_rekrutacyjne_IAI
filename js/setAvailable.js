import { updateObject } from './updateObject.js'

export const setAvailable = data => {
	// Call the updateObject function and assign the object
	const item = updateObject()


	//Set product availability depending on information from json
	if (item) {
		if (item.size in data.sizes.items) {
			const status = data.sizes.items[item.size].status
			let svgSrc = ''
			let svgAlt = ''
			const avilableDiv = document.querySelector('#available')

			if (status === 'Produkt dostępny') {
				svgSrc = '../assets/check-solid.svg'
				svgAlt = 'Produkt dostępny'
			} else {
				svgSrc = '../assets//x-solid.svg'
				svgAlt = 'Produkt niedostępny'
			}

			avilableDiv.innerHTML = `<img class='popup-info__available-img' src=${svgSrc} alt=${svgAlt}><p class='popup-info__available-p'>${status}</p>`
		}
	}
}
