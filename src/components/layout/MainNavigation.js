import { NavLink } from 'react-router-dom'
import style from './MainNavigation.module.css'


export const MainNavigation = () => {
    return <header className={style.header}>
        <div className={style.logo}>Great Quotes</div>
        <nav className={style.nav}>
            <ul >
                <li >
                    <NavLink to='/quotes' activeClassName={style.active}>All quotes</NavLink >
                </li>
                <li>
                <NavLink to='/newquote' activeClassName={style.active}>Add a Quote</NavLink >
                </li>
                </ul>
        </nav>
    </header>
};