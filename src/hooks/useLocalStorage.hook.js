import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
    const [data, setData] = useState();

    useEffect(() => {
        const storage = localStorage.getItem(key);
        if (!storage) {
            return;
        }

        try {
            const res = JSON.parse(storage);
            if (res) {
                setData(res);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [data, saveData];
}