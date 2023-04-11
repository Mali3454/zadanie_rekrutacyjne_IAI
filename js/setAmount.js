import { fetchData } from './fetchData.js'
import { updateObject } from './updateObject.js'

export const setAmount = data => {
	const item = updateObject()

	let localAmount = JSON.parse(localStorage.getItem('amount'))

	let amount = localAmount ? localAmount : 1

	const maxAmount = data.sizes.items[item.type].amount

	localStorage.setItem('amount', JSON.stringify(amount))
	localStorage.setItem('maxAmount', JSON.stringify(maxAmount))

	const quantityP = document.querySelector('#quantity')
	if (amount > maxAmount) {
		quantityP.textContent = maxAmount
		localStorage.setItem('amount', JSON.stringify(maxAmount))
	} else {
		quantityP.textContent = amount
	}
}
