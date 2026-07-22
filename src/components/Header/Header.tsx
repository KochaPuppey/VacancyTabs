import styles from './Header.module.css'
import {UserCircleIcon} from '@phosphor-icons/react'
import imageHH from '../../assets/image 2.png'
import {Link, useMatch} from 'react-router-dom'
import classNames from 'classnames';
export default function Header () {
    const match = useMatch('/vacancy/*')
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={imageHH} />
        <p>.FrontEnd</p>
      </div>
      <div className={styles.middle}>
          <div className={classNames(styles.vacancy, {[styles.active]: match})}>
        <span>
            <Link to='/vacancy/Москва'>Вакансии FE</Link>
        </span>
          <span className={styles.dot}></span>
          </div>
          <Link to='/about/'>
        <span className={classNames(styles.aboutMe,{[styles.active]: !match})}> <UserCircleIcon size={22}  />
            Обо мне
        </span>
      </Link>
      </div>
    </header>
  )
}