import { Outlet } from "react-router"
import Footer from "./Footer"
import Navigation from "./Navigation"

const App = () => {
    return (
        <>
            <Navigation />
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}

export default App