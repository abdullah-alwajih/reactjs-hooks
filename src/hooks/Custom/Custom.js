import {useEffect, useState} from "react";
import axios from "axios";

export const useCustom = (url) => {
    const [data, setData] = useState(null);
    const getDataByFetch = async () => {
        await fetch(url,
            {
                method: 'GET'
            }
        ).then(response => response.json()).then(setData)
    }

    const getDataByAxios = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setData(res.data))
    }

    useEffect(() => {
        getDataByAxios();
    }, []);


    return [data]
}