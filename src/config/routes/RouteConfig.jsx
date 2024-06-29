import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const LOGIN = lazy(() => import("../../pages/auth/logIn/Login"))
const SIGNUP = lazy(() => import("../../pages/auth/signUp/SignUp"));
const UNHAUTORIZED = lazy(() => import("../../pages/redirect/unhautorized/Unhautorized"));

const MAIN = lazy(() => import("../../pages/main/Main"))

const HOME = lazy(() => import("../../pages/home/Home"))
const RouteConfig = () => {
    return (
        <Suspense fallback={<p className="text-center">loadings ...</p>}>
            <Routes>
                <Route path="login" element={<LOGIN />} />
                <Route path="signUp" element={<SIGNUP />} />
                <Route path="unhautorized" element={<UNHAUTORIZED />} />

                <Route path="/" element={<MAIN />} />
                <Route path="home" element={<HOME />} />

                <Route path="*" element={<MAIN />} />
            </Routes>
        </Suspense>
    )
}

export default RouteConfig
