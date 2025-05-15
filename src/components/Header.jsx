import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full flex  justify-between items-center absolute top-0 left-0 right-0 bg-element h-14 px-12">
            <h2 className="font-extrabold"><Link to='/'>Where in the world ?</Link></h2>
            <p>Dark Mode</p>
        </header>
    )
}