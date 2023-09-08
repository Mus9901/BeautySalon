import { Container } from '@mui/material'
import styles from './Banner.module.scss'
import { UpgradeIcon } from '../Icons'
import MainButton from '../MainButton/MainButton'
import Image from 'next/image'
import Link from 'next/link'


export default function Banner() {
    return (
        <div className={styles.root}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.leftBox}>
                        <div className={styles.lineOne}>
                            <p>Welcome to Beautyness!!!</p>
                        </div>
                        <h1>Beauty is power a smile is its sword.</h1>
                        <p className={styles.description}>There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
                        <Link href="#contact">
                            <a>
                                <MainButton text="Make a reservation"/>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.imageBox}>
                        <img src="/images/women1.png" layout='responsive' width={550} height={545}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}