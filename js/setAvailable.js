import { fetchData } from './fetchData.js'
import { updateObject } from './updateObject.js'

export const setAvailable = () => {
	fetchData().then(data => {
		const item = updateObject()

		if (item) {
			if (item.type in data.sizes.items) {
				const status = data.sizes.items[item.type].status
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
	})
}
