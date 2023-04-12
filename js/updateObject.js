export const updateObject = () => {
	const checkbox = document.querySelector('input[type="radio"]:checked')
	const selectElement = document.querySelector('select')

	//Get ID of choosen option in select
	const selectedIndex = selectElement.selectedIndex
	const selectedOption = selectElement.options[selectedIndex]
	const selectedValue = selectedOption.value


	//Create an object in localstorage, or update if it exists
	const obj = { size: checkbox.value, variant: selectedValue }
	let localObj = JSON.parse(localStorage.getItem('iaiStorage'))
	if (!localObj) {
		localStorage.setItem('iaiStorage', JSON.stringify(obj))
	} else {
		localObj.size = checkbox.value
		localObj.variant = selectedValue
		localStorage.setItem('iaiStorage', JSON.stringify(localObj))
	}


	return obj
}
