import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";


export function LayoutPage(){
    return (
        <>
            <Header />
            <div className="container">
                <Outlet/>
            </div>
            {/* <Footer /> */}
        </>


    )
};
