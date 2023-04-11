import { fetchData } from './fetchData.js'

export const setTitle = () => {
	fetchData().then(data => {
		const titleDiv = document.querySelector('#title')

		titleDiv.innerHTML = `<p class='popup-info__title-p'>${data.product.name}</p>`
	})
}
