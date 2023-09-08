import { Container } from '@mui/material'
import styles from './Styles.module.scss'
import data from '../mock/news'
import NewsCard from '../NewsCard/NewsCard'
import OutlinedButton from '../OutlinedBtn/OutlinedBtn'


export default function News() {
    return (
        <section>
            <Container>
                <div className={styles.paragraph}>
                    <p>Our Blog</p>
                    <h1>Latest Updates</h1>
                </div>
                <div className={styles.root}>
                    {data.news.map((el, index) => <NewsCard 
                        src={el.src}
                        datatext={el.datatext}
                        title={el.title}
                        desc={el.desc}
                        key={`section-${index}`}
                    />)}
                </div>
                
                {/* <div className={styles.button}>
                        <a href=""> View More Stories </a>
                </div> */}
            </Container>
        </section>
    )
}