// Import necessary functions from other modules
import { setPrice } from './setPrice.js'
import { updateObject } from './updateObject.js'
import { setAvailable } from './setAvailable.js'
import { setAmount } from './setAmount.js'

export const createSizeElement = data => {
	const parentElement = document.querySelector('#size-wrapper')

	const sizes = data.sizes.items

	const itemsNames = []
	let selectedValue

	// Get the value of size from localStorage, if available
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	if (localObj) {
		selectedValue = localObj.size
	}

	//Loop through the sizes to create array of objects
	for (const key in sizes) {
		const itemName = sizes[key]
		itemsNames.push(itemName)
	}

	let isChecked

	// Loop through the sizes to create radio buttons for each size
	for (const element of itemsNames) {
		const newDiv = document.createElement('div')
		newDiv.classList.add('popup-info__size')

		const inputRadio = document.createElement('input')
		inputRadio.type = 'radio'
		inputRadio.id = element.type
		inputRadio.classList.add('popup-info__size-checkbox')
		inputRadio.name = 'size'
		inputRadio.value = element.type

		// Set the first radio button as checked by default, or the one that was previously selected
		if (!selectedValue) {
			if (element === itemsNames[0]) {
				inputRadio.checked = true
			}
		} else {
			if (inputRadio.value === selectedValue) {
				inputRadio.checked = true
			}
		}

		// Call the updateObject, setPrice, setAvailable, and setAmount functions when a radio button is clicked
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

		// Set the price when a radio button is checked
		if (isChecked) {
			setPrice(data)
		}
	}
}
