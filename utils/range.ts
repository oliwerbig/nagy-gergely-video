const range = (start, end) => {
	return Array.from({ length: end - start }, (v, k) => k + start)
}

export default range
