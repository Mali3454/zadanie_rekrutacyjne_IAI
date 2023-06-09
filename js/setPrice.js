import { updateObject } from './updateObject.js'

export const setPrice = data => {
	// Call the updateObject function and assign the object
	const item = updateObject()

	const multiversions = data.multiversions[0].items


	//Set product prize depending on information from json
	for (const key in multiversions) {
		if (item) {
			if (item.size in data.sizes.items) {
				const multiversion = multiversions[key]
				if (multiversion.values_id === item.variant) {
					const priceDiff = multiversion.products[0].price_difference

					const priceDiv = document.querySelector('#price')

					const price = parseFloat(data.sizes.items[item.size].price) + parseFloat(priceDiff)

					priceDiv.innerHTML = `<p class='popup-info__price-p'>${price.toLocaleString('pl-PL', {
						style: 'currency',
						currency: 'PLN',
					})}</p>`
				}
			}
		}
	}
}
