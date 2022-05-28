import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //se recarga el componente y no la página
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        //palabra reservada por defecto
        e.preventDefault();
        if(inputValue.trim().length > 2){
            console.log('actualiza sin recargar el navegador')
            setCategories( cats => [inputValue,...cats] );
            setInputValue('');
        }

    }

    return (
        // <>--- fragmen agrupa etiquetas html
        // </>
        <form onSubmit={handleSubmit}>
            {/* <h1>
                {inputValue}
            </h1> */}

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired    
}