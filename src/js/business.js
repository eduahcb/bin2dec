const Binary = () => {

	const toDecimal = (value) => {
        return value.split('').reverse().reduce( (acc, currentValue, index) =>  
            parseInt(currentValue) === 1 && acc + 2 ** index, 0)
	}  

	const isValid = (value) => {
		const regex = /^(?:[01]+|[01]*\.[01]+)$/
		return regex.test(value)
	}

	return {
		toDecimal,
		isValid
	}
    

}