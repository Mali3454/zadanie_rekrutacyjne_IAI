import { setPrice } from './setPrice.js'
import { updateObject } from './updateObject.js'
import { setAvailable } from './setAvailable.js'
import { setAmount } from './setAmount.js'

export const createSizeElement = array => {
	const parentElement = document.querySelector('#size-wrapper')

	for (const element of array) {
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
			setPrice()
			setAvailable()
			setAmount()
		}

		const newLabel = document.createElement('label')
		newLabel.setAttribute('for', element.type)

		newLabel.classList.add('popup-info__size-label')

		newLabel.textContent = element.name
		newDiv.appendChild(inputRadio)
		newDiv.appendChild(newLabel)

		parentElement.appendChild(newDiv)

		setPrice()
	}
}
