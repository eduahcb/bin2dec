const BinToDecController = (binary) => {	
    const $ = document.querySelector.bind(document)


	const buttonElement = $('[data-btn]')
	const binaryElement = $('[data-binary]')
	const resultElement = $('[data-result]')


	const getResult = () => {
		const value = binaryElement.value
		return binary.toDecimal(value)
	}


    const addError = element => {
        element.classList.add('error')
    }

    const removeError = element => {
        element.classList.remove('error')
    }


    const isValid = () => {
        const value = binaryElement.value
        
        if(!binary.isValid(value)){
            addError(binaryElement)
            return false
        }
        else{
            removeError(binaryElement)
            return true
        }
    }


	const init = () => {
        buttonElement.addEventListener('click',  (e) => {
			e.preventDefault()

			if(!isValid()) return

			resultElement.textContent = getResult()
			
		})

		binaryElement.addEventListener('blur', () => {
			isValid()
		})
	
	}


    return {
        init
    }

}