import styles from './style.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../Icons.js'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>

        <div className={styles.box}>

          <Link href='/'>
            <a className={styles.logo}>
              <h2>Logo</h2>
            </a>
          </Link>
        <div className={styles.iconWrapper}>
          <Link href='/'>
              <a className={styles.icon}>
                <FacebookIcon />
              </a>
          </Link>
          <Link href='/'>
              <a className={styles.icon}>
                <TwitterIcon />
              </a>
          </Link>
          <Link href='/'>
              <a className={styles.icon}>
                <InstagramIcon />
              </a>
          </Link>
        </div>
        </div>

        <div className={styles.box}>
        <nav>
          <ul>

                  <h2>Pages</h2>

                  <li>
                    <Link href='/Home'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/Services'>
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact</a>
                    </Link>
                  </li>

          </ul>
          <ul>

                  <h2>Address</h2>

                  <li><a>St.James House</a></li>
                  <li><a>10 Rosebery Ave</a></li>
                  <li><a>EC1R 4TF</a></li>
                  <li><a>London</a></li>
                  <li><a>United Kingdom</a></li>
          </ul>
          <ul>
                  <h2>Contact Numbers</h2>

                  <li><a>London. United Kingdom:</a></li>
                  <li><a>+44 TBC</a></li>
                  <li><a>London. United Kingdom:</a></li>
                  <li><a>+44 TBC</a></li>
                  <li><a>London. United Kingdom:</a></li>
                  <li><a>+44 TBC</a></li>

          </ul>
        </nav>
        </div>

        <div className={styles.box}>
          <p> All Right reserved by &copy;Beaty Salon LTD 2019 </p>
        </div>

      </Container>
    </footer>
  )
}
