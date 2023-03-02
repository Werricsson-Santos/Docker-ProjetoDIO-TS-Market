import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string | null, headers?: {}) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        if (url) {
            axios.get(url)
            .then(response => {
                setData(response.data);
            })
        }
    }, [url]);

    return { data };
}
