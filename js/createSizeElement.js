import { setPrice } from './setPrice.js'
import { updateObject } from './updateObject.js'
import { setAvailable } from './setAvailable.js'
import { setAmount } from './setAmount.js'

export const createSizeElement = data => {
	const parentElement = document.querySelector('#size-wrapper')

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

	for (const element of itemsNames) {
		const isChecked = JSON.parse(localStorage.getItem(element.type))

		const newDiv = document.createElement('div')
		newDiv.classList.add('popup-info__size')

		const inputRadio = document.createElement('input')
		inputRadio.type = 'radio'
		inputRadio.id = element.type
		inputRadio.classList.add('popup-info__size-checkbox')
		inputRadio.name = 'size'
		inputRadio.value = element.type
		if (isChecked) {
			inputRadio.checked = isChecked
		}
		inputRadio.onclick = () => {
			updateObject()
			setPrice(data)
			setAvailable(data)
			setAmount(data)
		}

		const newLabel = document.createElement('label')
		newLabel.setAttribute('for', element.type)

		newLabel.classList.add('popup-info__size-label')

		newLabel.textContent = element.name
		newDiv.appendChild(inputRadio)
		newDiv.appendChild(newLabel)

		parentElement.appendChild(newDiv)

		if (isChecked) {
			setPrice(data)
		}
	}
}
