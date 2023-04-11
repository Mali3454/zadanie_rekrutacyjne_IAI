import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { slider } from './slider.js'
import { updateObject } from './updateObject.js'

export const createOptionElement = data => {
	const parentElement = document.querySelector('#select')

	const isSelected = JSON.parse(localStorage.getItem('select'))

	const sizes = data.sizes.items
	const variants = data.multiversions[0].items
	const itemsNames = []
	const itemVariants = []

	for (const key in sizes) {
		const itemName = sizes[key]
		itemsNames.push(itemName)
	}

	for (const key in variants) {
		const item_Variants = variants[key].values
		for (const key in item_Variants) {
			const itemVariant = item_Variants[key]
			itemVariants.push(itemVariant)
		}
	}

	for (const element of itemVariants) {
		const newOption = document.createElement('option')
		newOption.value = element.id
		newOption.text = element.name

		parentElement.appendChild(newOption)
		if (isSelected) {
			parentElement.selectedIndex = isSelected
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
