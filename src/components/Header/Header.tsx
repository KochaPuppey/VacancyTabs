import styles from './Header.module.css'
import {UserCircleIcon} from '@phosphor-icons/react'
import imageHH from '../../assets/image 2.png'
import {useNavigate, useMatch} from 'react-router'
import classNames from 'classnames';
export default function Header () {
    const navigate = useNavigate();
    const match = useMatch('/vacancy/*')
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={imageHH} />
        <p>.FrontEnd</p>
      </div>
      <div className={styles.middle}>
          <div className={classNames(styles.vacancy, {[styles.active]: match})}>
        <span onClick={() => navigate('/vacancy/Москва')}>Вакансии FE</span>
          <span className={styles.dot}></span>
          </div>
        <span className={classNames(styles.aboutMe,{[styles.active]: !match})} onClick={() => navigate('/about/')}> <UserCircleIcon size={22}  />Обо мне</span>
      </div>
    </header>
  )
}