import { SearchBox } from "./SearchBox"
import { DropdownMenu } from "./DropdownMenu"

export const Filters = () => {
    return (
        <div className="flex gap-3 flex-wrap justify-between h-15 my-6 md:mt-10 md:mb-0">
            <SearchBox/>
            <DropdownMenu/>
        </div>
    )
}

