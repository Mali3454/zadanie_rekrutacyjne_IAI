// Import necessary functions from other modules
import { createOptionElement } from './createOptionElement.js'
import { createSizeElement } from './createSizeElement.js'
import { fetchData } from './fetchData.js'
import { sendData } from './sendData.js'
import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { setTitle } from './setTitle.js'
import { slider } from './slider.js'
import { updateObject } from './updateObject.js'

// The code retrieves data using the 'fetchData' function, and then uses it to create elements, set the title, price, available, and amount, as well as initialize the slider.
fetchData().then(data => {
	createSizeElement(data)
	createOptionElement(data)
	updateObject()
	setTitle(data)
	setPrice(data)
	setAvailable(data)
	setAmount(data)
	slider(data)

	prevBtn.addEventListener('click', e => {
		e.preventDefault()

		let index = 0

		if (index > 0) {
			index--
		}
		slider(data, index)
	})

	nextBtn.addEventListener('click', e => {
		e.preventDefault()

		let index = 0
		let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
		let maxIndex = localObj.maxIndex

		if (index < maxIndex) {
			index++
		}
		slider(data, index)
	})
})

// The code gets references to HTML elements, including quantity buttons, slider navigation, form, pop-up, overlay, and close button.
const quantityP = document.querySelector('#quantity')
const buttonUp = document.querySelector('#quantity-up')
const buttonDown = document.querySelector('#quantity-down')
const prevBtn = document.querySelector('#slider-left')
const nextBtn = document.querySelector('#slider-right')
const form = document.querySelector('form')
const popup = document.querySelector('#popup')
const popupBtn = document.querySelector('#popup-btn')
const overlay = document.querySelector('#popup-overlay')
const close = document.querySelector('#popup__close')

// The code adds event listeners for the quantity buttons  pop-up button
buttonDown.addEventListener('click', e => {
	e.preventDefault()

	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	let amount = localObj.amount

	if (amount > 1) {
		amount--
		quantityP.textContent = amount
		localObj.amount = amount
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	}
})

buttonUp.addEventListener('click', e => {
	e.preventDefault()
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))

	let maxAmount = localObj.maxAmount
	let amount = localObj.amount

	if (amount < maxAmount) {
		amount++
		quantityP.textContent = amount
		localObj.amount = amount
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	}
})

// The code adds event listeners for the form submission
form.addEventListener('submit', e => {
	e.preventDefault()
	sendData()
})

//The code adds event listeners for the pop-up button
popupBtn.addEventListener('click', e => {
	e.preventDefault()
	popup.style.display = 'flex'
	overlay.classList.add('popup-overlay')
	popupBtn.style.zIndex = -5
})

// The code adds an event listener to the close button, which hides the pop-up.
close.addEventListener('click', e => {
	e.preventDefault()
	popup.style.display = 'none'
	overlay.classList.remove('popup-overlay')
	popupBtn.style.zIndex = 1
})

//This code listens for clicks on the document and closes a popup if the click is outside of the popup and its associated button.
document.addEventListener('click', e => {
	let isClickInsideDiv = popup.contains(e.target)
	let isClickInsideBtn = popupBtn.contains(e.target)

	if (!isClickInsideDiv && !isClickInsideBtn) {
		overlay.classList.remove('popup-overlay')
		popup.style.display = 'none'
		popupBtn.style.zIndex = 1
	}
})
