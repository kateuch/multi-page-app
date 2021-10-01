import style from './Layout.module.css'
import { MainNavigation } from './MainNavigation'


export const Layout = (props) => {
        return <>
        <MainNavigation />
        <main classNmae={style.main}>{props.children}</main>
        </>
}