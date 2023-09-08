import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './style.module.scss'
import { CalendarIcon, CompanyLogo, FBIcon, LinIcon, TweetIcon } from '../Icons'
import MainButton from '../MainButton/MainButton'

export default function Header() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const langs = [
    {
      key: 'ru',
      label: 'ru'
    },
    {
      key: 'uz',
      label: 'uz'
    },
    {
      key: 'en',
      label: 'en'
    }
  ]
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link href='/'>
            <a className={styles.logo}>
              <CompanyLogo />
              <h2>Name</h2>
            </a>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.rightBox}>
            <div className={styles.icons}>
              <Link href="/">
                <a><FBIcon /></a>
              </Link>
              <Link  href="/">
                <a><TweetIcon /></a>
              </Link>
              <Link scroll href="/">
                <a><LinIcon /></a>
              </Link>
            </div>
                <Link href="#contact">
                  <a>
                    <MainButton text="RESERVATION" icon={<CalendarIcon />}/>
                  </a>
                </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
