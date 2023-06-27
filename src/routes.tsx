
import { createBrowserRouter } from "react-router-dom";
import { routs_en } from "./constants/ROUT";
import { Reissue } from "./Page/Authen/Reissue/Reissue";
import { SignIn } from "./Page/Authen/SignIn/SignIn";
import Pages404 from "./Page/Authen/Pages404/Pages404";
import { Home } from "./Page/Authen/Home/Home";
import { Dashboard } from "./Page/Authen/Dashboard/Dashboard";
import AntdMenu from "./Page/Components/antdMenu/AntdMenu";
import Profile from "./Page/Authen/Profile/Profile";
import { Authorizations } from "./contexts/Authorizations";

export const routers = createBrowserRouter(
    [
        {
            path: "/",
            element: (<SignIn />)
        },
        {
            path: "*",
            element: <Pages404 />
        },
        {
            path: routs_en["/signIn"].link,
            element: <SignIn />
        },
        // {
        //     path: routs_en["/reissue"].link,
        //     element: <Reissue />
        // },
        {
            path: "/dashboard",
            element:
                (

                    <Authorizations >
                        <div className="flex gap-5 p-1  m-1 ">
                            <div className="flex-none w-64"><AntdMenu /></div>
                            <div className="grow "><Dashboard /></div>
                        </div>
                    </Authorizations>)
        },
        {
            path: "/profile",
            element:
                (<Authorizations ><div className="flex gap-5 p-1  m-1 ">
                    <div className="flex-none w-64"><AntdMenu /></div>
                    <div className="grow "><Profile /></div>
                </div></Authorizations>)
        },

    ]
)