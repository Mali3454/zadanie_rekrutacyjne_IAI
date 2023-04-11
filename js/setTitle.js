import { fetchData } from './fetchData.js'

export const setTitle = () => {
	fetchData().then(data => {
		const titleDiv = document.querySelector('#title')

		titleDiv.innerHTML = `<h2 class='popup-info__title-h2'>${data.product.name}</h2>`
	})
}
