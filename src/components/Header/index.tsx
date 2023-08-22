import styles from './styles.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt='Ai, que fome!' className={styles.headerLogo} />
      <h1 className={styles.headerTitle}>Ai, que fome!</h1>
    </div>
  )
}

export default Header
