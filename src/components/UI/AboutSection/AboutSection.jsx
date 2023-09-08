import { Container } from "@mui/material";
import styles from './Styles.module.scss'
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className={styles.about}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <p>About Us</p>
                        <h2>The Beauty is about being Comfortable in your own skin!</h2>
                        <p className={styles.desc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which do not look even many desktop publishing packages.</p>
                    </div>
                    <div className={styles.imgBox}>
                        <Image src="/images/women2.jpg" layout="fill"/>
                        <div className={styles.bg}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}