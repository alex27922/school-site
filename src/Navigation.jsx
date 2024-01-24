import { NavLink } from "react-router-dom"
const Navigation = () => {
    return (
        <nav class="navigation-bar">
            <ul className="navigation-list">
                <NavLink to="/about"><li className="navigation-list__item">Про нас</li></NavLink>
                <NavLink to="/"><li className="navigation-list__item">Головна</li></NavLink>
                <NavLink to="/contacts"><li className="navigation-list__item">Контакти</li></NavLink>


            </ul>
        </nav>
    )
}

export default Navigation