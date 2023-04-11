export const updateObject = () => {
	const checkbox = document.querySelector('input[type="radio"]:checked')

	localStorage.setItem('myCheckbox', checkbox.checked)

	const select = document.querySelector('#select')

	const type = checkbox.value
	const variant = select.value

	const checkboxes = document.querySelectorAll('input[type="radio"]')

	checkboxes.forEach(checkbox => {
		localStorage.setItem(checkbox.value, JSON.stringify(checkbox.checked))
	})

	const option = document.querySelector('select').selectedIndex

	localStorage.setItem('select', JSON.stringify(option))

	if (type && variant) {
		const item = { type, variant }

		return item
	}
}
