import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string): [T | undefined, (newData: T) => void] {
    const [data, setData] = useState<T | undefined>();

    useEffect(() => {
        const storage = localStorage.getItem(key);
        if (!storage) {
            return;
        }

        try {
            const res = JSON.parse(storage) as T;
            if (res) {
                setData(res);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    const saveData = (newData: T) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [data, saveData];
}