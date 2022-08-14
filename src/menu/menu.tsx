import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { ReactComponent as Logo } from "assets/Eletronicos.svg";


export default function Menu() {
    return (
        <div className={styles.menu}>
                      <Logo className={styles.logo} />
            <ul className={styles.menuitem}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Venda'>Catalogo</Link></li>
                <li><Link to='/Fale'>Fale conosco</Link></li>
                <li><Link to='/Funcionario'>Trabalhe conosco</Link></li>
            </ul>

        </div>
    )
}