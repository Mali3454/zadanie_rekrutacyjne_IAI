import { fetchData } from './fetchData.js'
import { updateObject } from './updateObject.js'

export const slider = (index = 0) => {
	fetchData().then(data => {
		const item = updateObject()

		const multiversions = data.multiversions[0].items

		const slider = document.querySelector('#slider')

		for (const key in multiversions) {
			if (item) {
				const multiversion = multiversions[key]
				if (multiversion.values_id === item.variant) {
					let maxIndex = multiversion.img.length
					localStorage.setItem('maxIndex', JSON.stringify(maxIndex))
					const image = multiversion.img[index]
					slider.src = image.src
					slider.alt = image.alt
				}
			}
		}
	})
}
