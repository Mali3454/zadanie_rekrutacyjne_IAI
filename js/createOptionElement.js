import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { slider } from './slider.js'
import { updateObject } from './updateObject.js'

export const createOptionElement = array => {
	const parentElement = document.querySelector('#select')

	const isSelected = JSON.parse(localStorage.getItem('select'))

	for (const element of array) {
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
		setPrice()
		setAvailable()
		setAmount()
		slider()
	}
}
