import { useEffect, useState, useCallback } from "react";
import axios from 'axios'

const useApi = () => {
    const [data, setData] = useState([]);

    const login = useCallback(async () => {
        const res = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
            "email": "business@gmail.com",
            "password": "Aa1234!"
        });
        const data = await res.data;
        localStorage.setItem('accessToken', data);
        console.log(data)
    }, [])

    const getData = useCallback(async () => {
        const res = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
        const data = await res.data;
        setData(data);
        console.log("useCallback");
        // const res = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
        // const data = await res.json();
        // console.log(data);
    }, [])

    useEffect(() => {
        console.log('Welcome');
        getData();
    }, [getData]);

    return { data, setData, getData, login };
}

export default useApi;
