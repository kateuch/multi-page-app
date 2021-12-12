import { NavLink } from 'react-router-dom'
import style from './MainNavigation.module.css'

const setActive = (isActive)=> isActive ? style.active : '';

export const MainNavigation = () => {
    return <header className={style.header}>
        <div className={style.logo}>Great Quotes</div>
        <nav className={style.nav}>
            <ul >
                <li >
                    <NavLink to='/quotes' className={setActive}>All quotes</NavLink >
                </li>
                <li>
                <NavLink to='/newquote' className={setActive}>Add a Quote</NavLink >
                </li>
                </ul>
        </nav>
    </header>
};