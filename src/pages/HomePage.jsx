import { useQuery } from "@tanstack/react-query"

import { Filters } from "../components/Filters"
import { CardsList } from "../components/CardsList"
import { fetchData } from "../helpers/fetchData"

export const HomePage = () => {
    const FIELDS = [
        'name',
        'flags',
        'region',
        'population',
        'capital',
        'cca3']
    const URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`

    const { data: countries, isError, isLoading } = useQuery({
        queryKey: ['countries'],
        queryFn: () => fetchData(URL),
    })
    if (isLoading) return <div className="loading">loading...</div>

    if (isError) return <div className="error">oops...something failed to fetch data</div>

    return (
        <>
            <Filters />
            <CardsList countries={countries} />
        </>
    )
}