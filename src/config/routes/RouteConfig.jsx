import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../security/RequireAuth";


const LOGIN = lazy(() => import("../../pages/auth/logIn/Login"))
const SIGNUP = lazy(() => import("../../pages/auth/signUp/SignUp"));
const UNHAUTORIZED = lazy(() => import("../../pages/redirect/unhautorized/Unhautorized"));

const MAIN = lazy(() => import("../../pages/main/Main"))

const HOME = lazy(() => import("../../pages/home/content/client/Client"))

const _HOME_ADDARRETS = lazy(() => import("../../pages/home/content/client/contents/add/AddArrets"))
const _HOME_EXPLORE = lazy(() => import("../../pages/home/content/client/contents/explore/Section"))
const RouteConfig = () => {
    return (
        <Suspense fallback={<p className="text-center">loadings ...</p>}>
            <Routes>
                <Route path="login" element={<LOGIN />} />
                <Route path="signUp" element={<SIGNUP />} />
                <Route path="unhautorized" element={<UNHAUTORIZED />} />

                <Route path="/" element={<MAIN />} />


                <Route element={<RequireAuth />}>
                    <Route path="home" element={<HOME />} >
                        <Route index element={<_HOME_EXPLORE />} />
                        <Route path="add" element={<_HOME_ADDARRETS />} />
                    </Route>
                </Route>

                <Route path="*" element={<MAIN />} />
            </Routes>
        </Suspense>
    )
}

export default RouteConfig
