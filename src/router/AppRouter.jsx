import { Navigate, Routes, Route } from "react-router-dom";

import { Navbar } from '../ui'
import { LoginPage } from '../auth';
import { DCPage, MarvelPage} from '../heroes';


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="dc-comics" element={<DCPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="/" element={<Navigate to="marvel" />} />
            </Routes>
        </>
    )
}
