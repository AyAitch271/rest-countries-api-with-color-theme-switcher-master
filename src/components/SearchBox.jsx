import { useSearchParamUpdater } from "../hooks/useSearchParamUpdater"
import { useSearchParams } from "react-router-dom"



export const SearchBox = () => {
    const [searchParams] = useSearchParams()
    
    const search = searchParams.get('search') || ''

    return (
        <input 
        value={search}
        className="bg-element py-3 pl-5 w-full h-full custom-shadow sm:w-full md:w-[40%]"
        type="search" 
        placeholder="Search for a country..."
        name="search_box" 
        id="search_box" 
        onChange={useSearchParamUpdater('search')}
        />
    )
}