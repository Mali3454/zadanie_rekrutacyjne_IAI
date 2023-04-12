import { updateObject } from './updateObject.js'

export const slider = (data, index = 0) => {
	const item = updateObject()
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))

	const multiversions = data.multiversions[0].items

	const slider = document.querySelector('#slider')

	for (const key in multiversions) {
		if (item) {
			const multiversion = multiversions[key]
			if (multiversion.values_id === item.variant) {
				let maxIndex = multiversion.img.length
				localObj.maxIndex = maxIndex
				localStorage.setItem('iaiStorage', JSON.stringify(localObj))
				const image = multiversion.img[index]
				slider.src = image.src
				slider.alt = image.alt
			}
		}
	}
}
