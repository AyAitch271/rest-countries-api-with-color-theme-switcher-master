import { Link } from "react-router-dom"
import { getCommonName } from "../helpers/getCommonName"

export const BorderCountries = ({ borders }) => {
    return (
        <dl className="flex gap-3 flex-wrap items-center">
            <dt className="font-bold">Border Countries:</dt>
            {borders && borders.map((border, index) => {
                return <Link key={index} className="custom-shadow bg-element px-[8px] py-[4px] rounded-sm" to={`/${border}`}>{getCommonName(border)}</Link>
            })}
            {borders.length === 0 && <span>None</span>}
        </dl>
    )
}