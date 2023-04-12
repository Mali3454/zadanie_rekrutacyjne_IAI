export const fetchData = async () => {
	const response = await fetch('/xbox.json')

	if (!response.ok) throw new Error('Wystąpił bład podczas połączenia z serwerem')

	const data = await response.json()

	return data
}
