import React, { useState } from 'react';

// Add localStorage power to useState (same functionality otherwise)
// Requirements
// same format as useState from the component perspective
// If the values are already saved in localStorage(e.g. form already started), use those values.
// Otherwise, initialize with the initialValues passed in
// Then, every time we update state, also update localStorage to keep it in sync

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

    // Part one: initialization step
    // If the value is in localStorage, use it. Otherwise use initialValues

        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));

        } 

        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;

    });


    //Part two: Also update localStorage every time state is updated.
    
    const setValue = (value) => {

        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));

    }

    return [storedValue, setValue];

}