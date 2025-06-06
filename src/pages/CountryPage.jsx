import { useParams, useNavigate } from "react-router-dom"

import { useQuery } from "@tanstack/react-query"

import { getValuesOfArray } from "../helpers/getValuesOfArray"
import { formatNumber } from "../helpers/formatNumber"
import { fetchData } from "../helpers/fetchData"

import { CountryDetails } from "../components/CountryDetails"
import { BorderCountries } from "../components/BorderCountries"

import { DisplayLoading } from "../components/reusable/DisplayLoading"
import { DisplayError } from "../components/reusable/DisplayError"

import { ArrowBackIcon } from "../components/icons/ArrowBackIcon"

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

  const URL = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=${FIELDS.join(',')}`

  const navigate = useNavigate()

  const { data: countryData, isLoading, isError } = useQuery({
    queryKey: ['country', countryCode],
    queryFn: () => fetchData(URL),
  })

  if (isLoading) return <DisplayLoading />

  if (isError) return <DisplayError />


  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = countryData

  return (
    <section className="country py-12" >
      <button className="relative h-full fill-text hover:fill-element hover:bg-text hover:text-element text-xl custom-shadow bg-element pl-10 py-1.5 px-3 my-10 rounded-sm"
        onClick={() => navigate(-1)}>
        <span className="absolute top-[50%] translate-y-[-50%] size-7 fill-inherit left-1">
          <ArrowBackIcon />
        </span>
        <span>Back</span>
      </button>
      <div className="country-inner grid lg:grid-cols-2 items-center">
        <img src={flags.png} srcSet={flags.svg} alt={flags.alt} className="w-lg md:w-full md:h-auto lg:w-120 sm:w-full" />
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