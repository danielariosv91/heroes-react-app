import { Navigate, Routes, Route } from "react-router-dom";
import { DCPage, MarvelPage, Search, Heroe } from "../pages";
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="dc-comics" element={<DCPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="search" element={<Search />} />
                <Route path="heroe" element={<Heroe />} />
                <Route path="/" element={<Navigate to="marvel" />} />
            </Routes>
        </>
    )
}


