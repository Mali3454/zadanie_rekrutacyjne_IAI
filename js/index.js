import { createOptionElement } from './createOptionElement.js'
import { createSizeElement } from './createSizeElement.js'
import { fetchData } from './fetchData.js'
import { sendData } from './sendData.js'
import { setAmount } from './setAmount.js'
import { setAvailable } from './setAvailable.js'
import { setPrice } from './setPrice.js'
import { setTitle } from './setTitle.js'
import { slider } from './slider.js'

fetchData().then(data => {
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

	createSizeElement(itemsNames)
	createOptionElement(itemVariants)
	setTitle()
	setPrice()
	setAvailable()
	setAmount()
	slider()
})

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

buttonDown.addEventListener('click', e => {
	e.preventDefault()

	let amount = JSON.parse(localStorage.getItem('amount'))

	if (amount > 1) {
		amount--
		quantityP.textContent = amount
		localStorage.setItem('amount', JSON.stringify(amount))
	}
})

buttonUp.addEventListener('click', e => {
	e.preventDefault()
	let maxAmount = JSON.parse(localStorage.getItem('maxAmount'))

	let amount = JSON.parse(localStorage.getItem('amount'))

	if (amount < maxAmount) {
		amount++
		quantityP.textContent = amount
		localStorage.setItem('amount', JSON.stringify(amount))
	}
})

prevBtn.addEventListener('click', e => {
	e.preventDefault()

	let index = 0

	if (index > 0) {
		index--
	}
	slider(index)
})

nextBtn.addEventListener('click', e => {
	e.preventDefault()

	let index = 0
	let maxIndex = JSON.parse(localStorage.getItem('maxIndex'))

	if (index < maxIndex) {
		index++
	}
	slider(index)
})

form.addEventListener('submit', e => {
	e.preventDefault()
	sendData()
})

popupBtn.addEventListener('click', e => {
	e.preventDefault()
	popup.style.display = 'flex'
	overlay.classList.add('popup-overlay')
	popupBtn.style.zIndex = -5
})

close.addEventListener('click', e => {
	e.preventDefault()
	popup.style.display = 'none'
	overlay.classList.remove('popup-overlay')
	popupBtn.style.zIndex = 1
})

document.addEventListener('click', e => {
	let isClickInsideDiv = popup.contains(e.target)
	let isClickInsideBtn = popupBtn.contains(e.target)

	if (!isClickInsideDiv && !isClickInsideBtn) {
		overlay.classList.remove('popup-overlay')
		popup.style.display = 'none'
		popupBtn.style.zIndex = 1
	}
})
