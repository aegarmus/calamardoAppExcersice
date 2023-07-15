import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"

import { NavBarApp } from "../components/NavBar/NavBarApp"

export const MainPage = () => {
    return (
        <>
            <NavBarApp/>
           <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='about' element = {<AboutPage/>}/>
           </Routes>
        </>
    )
}