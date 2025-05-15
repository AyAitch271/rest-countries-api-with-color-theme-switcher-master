import { SearchBox } from "./SearchBox"
import { DropdownMenu } from "./DropdownMenu"

export const Filters = () => {
    return (
        <div className="filters flex gap-3 flex-wrap justify-between h-13 mt-20 mb-15">
            <SearchBox/>
            <DropdownMenu/>
        </div>
    )
}

