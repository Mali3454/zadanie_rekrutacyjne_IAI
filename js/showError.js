export const showError = () => {
	const popup = document.querySelector('#popup')
	const popupBtn = document.querySelector('#popup-btn')
	popup.classList.remove('--inactive')
	popup.classList.add('--error')
	popup.innerHTML = '<p>Wystąpił błąd - przeładuj stronę</p>'
	popupBtn.classList.add('--disabled')
}
