import { useQuery } from "@tanstack/react-query"

export const useFetchData = (key, url) => {

    const fetchData = async () =>  {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: key,
        queryFn: () => fetchData,
    })

    return { data, isLoading, isError } 

}
