import { useParams, useNavigate } from "react-router-dom"

import { useQuery } from "@tanstack/react-query"

import { getValuesOfArray } from "../helpers/getValuesOfArray"
import { formatNumber } from "../helpers/formatNumber"
import { fetchData } from "../helpers/fetchData"

import { CountryDetails } from "../components/CountryDetails"
import { BorderCountries } from "../components/BorderCountries"

export const CountryPage = () => {
  const { countryCode } = useParams()

  const FIELDS = [
    'flags',
    'name',
    'population',
    'region',
    'subregion',
    'capital',
    'tld',
    'currencies',
    'languages',
    'borders']

  const URL = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=${FIELDS}`

  const navigate = useNavigate()
  
  const { data: countryData, isLoading, isError } = useQuery({
    queryKey: ['country', countryCode],
    queryFn: () => fetchData(URL)
  })

  if (isLoading) return <div className="loading">Loading...</div>

  if (isError) return <div className="error">Failed To Fetch Data</div>

  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = countryData

  return (
    <section className="country py-12" >
      <button className="custom-shadow bg-element px-[8px] py-1 my-10 rounded-sm" onClick={() => navigate(-1)}>Back</button>
      <div className="country-inner grid lg:grid-cols-2 items-center">
        <img src={flags.svg || flags.png} alt={flags.alt} className="w-lg md:w-full md:h-auto lg:w-120 sm:w-full"/>
        <div className="align-top space-y-10 ">
          <h4 className=" text-2xl font-extrabold my-6">{name.common}</h4>
          <div className="grid gap-8 lg:grid-cols-2">
            <CountryDetails details={[
              { label: "Native Name", value: Object.values(name.nativeName)[0].common },
              { label: "Population", value: formatNumber(population) },
              { label: "Region", value: region, link: `/?region=${region}` },
              { label: "Sub Region", value: subregion },
              { label: "Capital", value: capital[0] }
            ]} />
            <CountryDetails details={[
              { label: "Top Level Domain", value: getValuesOfArray(tld) },
              { label: "Currencies", value: getValuesOfArray(Object.values(currencies).map(c => c.name)) },
              { label: "Languages", value: getValuesOfArray(Object.values(languages)) }
            ]} />
          </div>
          <BorderCountries borders={borders} />
        </div>
      </div>
    </section>
  )
}