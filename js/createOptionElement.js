// Import necessary functions from other modules
import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { slider } from './slider.js'
import { updateObject } from './updateObject.js'

// Define the main function of the module, which creates and appends option elements to a select element in the DOM
export const createOptionElement = data => {
	// Find the select element in the DOM
	const parentElement = document.querySelector('#select')

	// Get the selected value from local storage if it exists
	let selectedValue
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	if (localObj) {
		selectedValue = localObj.variant
	}

	// Extract the item variants from the data
	const variants = data.multiversions[0].items
	const itemVariants = []
	for (const key in variants) {
		const item_Variants = variants[key].values
		for (const key in item_Variants) {
			const itemVariant = item_Variants[key]
			itemVariants.push(itemVariant)
		}
	}

	// Loop through the item variants and create an option element for each one
	for (let i = 0; i < itemVariants.length; i++) {
		const newOption = document.createElement('option')
		newOption.value = itemVariants[i].id
		newOption.text = itemVariants[i].name

		// Append the new option to the select element
		parentElement.appendChild(newOption)

		// Set the selected index of the select element based on the selected value from local storage
		if (!selectedValue) {
			parentElement.selectedIndex = 0
		} else {
			if (itemVariants[i].id === parseInt(selectedValue)) {
				parentElement.selectedIndex = i
			}
		}
	}

	// Add an onclick event listener to the select element that updates the UI based on the selected option
	parentElement.onclick = () => {
		updateObject()
		setPrice(data)
		setAvailable(data)
		setAmount(data)
		slider(data)
	}
}
