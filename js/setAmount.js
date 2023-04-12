import { updateObject } from './updateObject.js'

export const setAmount = data => {
	const item = updateObject()
	const btn = document.querySelector('#submit')

	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	localObj.amount = 0

	let amount = localObj.amount ? localObj.amount : 1

	const maxAmount = data.sizes.items[item.size].amount
	localObj.maxAmount = maxAmount

	localStorage.setItem('iaiStorage', JSON.stringify(localObj))

	const quantityP = document.querySelector('#quantity')
	if (amount > maxAmount) {
		quantityP.textContent = maxAmount
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	} else {
		quantityP.textContent = amount
	}

	if (maxAmount === 0) {
		btn.classList.remove('popup-info__btn')
		btn.classList.add('popup-info__btn-disabled')
	} else {
		btn.classList.remove('popup-info__btn-disabled')
		btn.classList.add('popup-info__btn')
	}
}
