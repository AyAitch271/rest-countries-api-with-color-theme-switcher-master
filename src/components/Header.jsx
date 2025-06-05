import { Link } from "react-router-dom"

import { DarkLightIcon } from "./icons/DarkLightIcon"

export const Header = () => {
    return (
        <header className="flex  justify-between items-center bg-element h-14 px-10">
            <h2 className="font-extrabold"><Link to='/'>Where in the world ?</Link></h2>
            <div className="flex items-center gap-2">
            <span className="size-6 fill-text">
                <DarkLightIcon/>     
            </span>
            <span>OS Default</span>
            </div>
        </header>
    )
}