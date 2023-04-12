import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { slider } from './slider.js'
import { updateObject } from './updateObject.js'

export const createOptionElement = data => {
	const parentElement = document.querySelector('#select')

	let selectedValue
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	if (localObj) {
		selectedValue = localObj.variant
	}

	const variants = data.multiversions[0].items
	const itemVariants = []

	for (const key in variants) {
		const item_Variants = variants[key].values
		for (const key in item_Variants) {
			const itemVariant = item_Variants[key]
			itemVariants.push(itemVariant)
		}
	}

	for (let i = 0; i < itemVariants.length; i++) {
		const newOption = document.createElement('option')
		newOption.value = itemVariants[i].id
		newOption.text = itemVariants[i].name

		parentElement.appendChild(newOption)

		if (!selectedValue) {
			parentElement.selectedIndex = 0
		} else {
			if (itemVariants[i].id === parseInt(selectedValue)) {
				parentElement.selectedIndex = i
			}
		}
	}

	parentElement.onclick = () => {
		updateObject()
		setPrice(data)
		setAvailable(data)
		setAmount(data)
		slider(data)
	}
}
