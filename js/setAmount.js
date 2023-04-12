import { updateObject } from './updateObject.js'

export const setAmount = data => {
	// Call the updateObject function and assign the object
	const item = updateObject()

	const btn = document.querySelector('#submit')

	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))

	let amount = localObj.amount ? localObj.amount : 1

	localObj.amount = amount
	const maxAmount = data.sizes.items[item.size].amount
	localObj.maxAmount = maxAmount

	localStorage.setItem('iaiStorage', JSON.stringify(localObj))

	const quantityP = document.querySelector('#quantity')

	//If amount is greater than maxAmount, set the text content of quantityP to maxAmount and save the updated localObj object to local storage. Otherwise, set the text content of quantityP to amount.
	if (amount > maxAmount) {
		quantityP.textContent = maxAmount
		localObj.amount = maxAmount
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	} else {
		quantityP.textContent = amount
		localObj.amount = amount
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	}

	//iI the value is less than zero disable button, otherwise enable
	if (maxAmount === 0) {
		btn.classList.remove('popup-info__btn')
		btn.classList.add('popup-info__btn-disabled')
	} else {
		btn.classList.remove('popup-info__btn-disabled')
		btn.classList.add('popup-info__btn')
	}
}
