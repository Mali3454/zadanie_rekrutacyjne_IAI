export const fetchData = async () => {
	const response = await fetch('/xbox.json')
	const data = await response.json()

	return data
}
