import { setPrice } from './setPrice.js'
import { updateObject } from './updateObject.js'
import { setAvailable } from './setAvailable.js'
import { setAmount } from './setAmount.js'

export const createSizeElement = data => {
	const parentElement = document.querySelector('#size-wrapper')

	const sizes = data.sizes.items

	const itemsNames = []
	let selectedValue
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	if (localObj) {
		selectedValue = localObj.size
	}

	for (const key in sizes) {
		const itemName = sizes[key]
		itemsNames.push(itemName)
	}

	let isChecked
	for (const element of itemsNames) {
		const newDiv = document.createElement('div')
		newDiv.classList.add('popup-info__size')

		const inputRadio = document.createElement('input')
		inputRadio.type = 'radio'
		inputRadio.id = element.type
		inputRadio.classList.add('popup-info__size-checkbox')
		inputRadio.name = 'size'
		inputRadio.value = element.type

		if (!selectedValue) {
			if (element === itemsNames[0]) {
				inputRadio.checked = true
			}
		} else {
			if (inputRadio.value === selectedValue) {
				inputRadio.checked = true
			}
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
