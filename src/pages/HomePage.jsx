import { useQuery } from "@tanstack/react-query"

import { Filters } from "../components/Filters"
import { CardsList } from "../components/CardsList"
import { fetchData } from "../helpers/fetchData"
import { useSearchParams } from "react-router-dom"
import { DisplayLoading } from "../components/reusable/DisplayLoading"
import { DisplayError } from "../components/reusable/DisplayError"



export const HomePage = () => {
    const [searchParams] = useSearchParams()
    const selectedRegion = searchParams.get('region') || 'All'

    const FIELDS = [
        'name',
        'flags',
        'region',
        'population',
        'capital',
        'cca3']
    const URL = selectedRegion == 'All' 
    ? `https://restcountries.com/v3.1/all?fields=${FIELDS}` : `https://restcountries.com/v3.1/region/${selectedRegion}?fields=${FIELDS}`

    const { data: countries, isError, isLoading } = useQuery({
        queryKey: ['countries', selectedRegion],
        queryFn: () => fetchData(URL),
    }) 
    if (isLoading) return <DisplayLoading />

    if (isError) return <DisplayError />


    return (
        <>
            <Filters />
            <CardsList countries={countries} />
        </>
    )
}