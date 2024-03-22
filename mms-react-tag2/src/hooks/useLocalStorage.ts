import { useState } from 'react';

export function useLocalStorage(key: string, initValue: any) {

    //aktueller local store check...
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null
    })


    const setStoredValue = (newValue: any) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }


    const removeStoredValue = () => {
        setValue(null)
        localStorage.removeItem(key)
    }


    return { value, setStoredValue, removeStoredValue }

}