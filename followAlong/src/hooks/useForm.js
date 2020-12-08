import React, { useState } from 'react';

export const useForm = (initialValues) => {
    
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {

        setValues({

            ...values, 
            [e.target.name]: e.target.value  // computed property name

        })

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        alert(values);

    };

    const clearForm = (e) => {

        e.preventDefault();
        setValues(initialValues);

    };

    return [values, handleChanges, handleSubmit, clearForm];

}