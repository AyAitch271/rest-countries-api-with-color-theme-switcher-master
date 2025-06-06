import { Link, useSearchParams } from "react-router-dom"

import { formatNumber } from "../helpers/formatNumber"
import { getValuesOfArray } from "../helpers/getValuesOfArray"

import { CountryDetails } from "./CountryDetails"

export const CardsList = ({ countries }) => {
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search') || ''
    const region = searchParams.get('region') || 'All'

    const filteredCountries = countries?.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase())
        return matchesSearch 
    })

    return (
        <div className="py-10 gap-15 items-start md:grid-cols-2 sm:grid-cols-2 grid lg:grid-cols-4">
            {filteredCountries?.length === 0 && <div className="text-lg font-bold">No Matches "{search.toLowerCase()}" Found In Region: {region} </div>}

            {filteredCountries?.map(({ name, flags, population, region, capital, cca3 }) => {
                return (
                    <div key={name.common} className="hover:scale-110 hover:transition-all bg-element rounded-lg custom-shadow">
                        <img className="object-cover w-full h-36 rounded-xs" src={flags.png} srcSet={flags.svg} loading="lazy" alt={flags.alt} />
                        <div className="pb-12 px-4">
                        <h4 className="text-lg font-extrabold my-2 "><Link to={cca3}>{name.common}</Link></h4>
                            <CountryDetails details={[
                                { label: 'Population', value: formatNumber(population) },
                                { label: 'Region', value: region, link: `?region=${region}` },
                                { label: 'Capital', value: capital[0] }
                            ]} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}