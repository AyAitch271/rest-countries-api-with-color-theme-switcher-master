import { useSearchParamUpdater } from "../hooks/useSearchParamUpdater"
import { useSearchParams } from "react-router-dom"
import { SearchIcon } from "./icons/SearchIcon"



export const SearchBox = () => {
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search') || ''

    return (
        <div className="relative w-full md:w-4/10 lg:4/10">
            <input
                value={search}
                className=" bg-element py-3 pl-15 h-full w-full custom-shadow "
                type="search"
                placeholder="Search for a country..."
                name="search_box"
                id="search_box"
                onChange={useSearchParamUpdater('search')}
            />
            <span className="fill-text size-7 absolute top-[50%] left-3 translate-y-[-50%]">
                <SearchIcon />
            </span>
        </div>
    )
}