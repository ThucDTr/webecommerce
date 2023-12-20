import { Route, Routes } from "react-router-dom";
import HomePage from "./page/users/homePage";
import Profile from "./page/users/profile";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./page/users/theme/masterLayout"
import Products from "./page/users/products";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <Profile />
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <Products />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom