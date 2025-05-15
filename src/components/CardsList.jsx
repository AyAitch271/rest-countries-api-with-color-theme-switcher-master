import { Link, useSearchParams } from "react-router-dom"

import { formatNumber } from "../helpers/formatNumber"
import { getValuesOfArray } from "../helpers/getValuesOfArray"

import { CountryDetails } from "./CountryDetails"

export const CardsList = ({ countries }) => {
    const [searchParams] = useSearchParams()

    const selectedRegion = searchParams.get('region') || 'All'
    const search = searchParams.get('search') || ''

    const filteredCountries = countries?.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase())
        const matchesRegion = selectedRegion === 'All' ? country.region : country.region === selectedRegion
        return matchesSearch && matchesRegion
    })

    return (
        <div className="cards-list gap-15 items-start grid lg:grid-cols-4 w-full h-screen">
            {filteredCountries?.length === 0 && <div className="text-2xl font-bold">No Results Found</div>}

            {filteredCountries?.map(({ name, flags, population, region, capital, cca3 }) => {
                return (
                    <div key={name.common} className="bg-element rounded-lg custom-shadow">
                        <img className="object-cover w-full h-36 rounded-xs" src={flags.svg || flags.png} alt={flags.alt} />
                        <div className="pb-12 px-4">
                        <h4 className="text-lg font-extrabold my-2 "><Link to={cca3}>{name.common}</Link></h4>
                            <CountryDetails details={[
                                { label: 'Population', value: formatNumber(population) },
                                { label: 'Region', value: region, link: `?region=${region}` },
                                { label: 'Capital', value: getValuesOfArray(capital) }
                            ]} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}