export default (...arguments) => {
	const paths = [...arguments]

	return paths.map(x => x.replace(/(^\/|\/$)/g, '').join('/'))
}