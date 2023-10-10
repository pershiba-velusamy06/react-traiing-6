
import { useEffect, useState } from 'react'

export const useCounter = (isBackWard) => {


    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isBackWard) {
                setCounter((prevCounter) => prevCounter - 1);
            } else {
                setCounter((prevCounter) => prevCounter + 1);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter

}