import { Container } from '@mui/material'
import styles from './Styles.module.scss'
import data from '../mock/services'
import ServiceCard from '../ServiceCard/ServiceCard'


export default function Services() {
    return (
        <section>
            <Container>
                <div className={styles.root}>
                    {data.services.map((el, index) => <ServiceCard 
                        src={el.src}
                        title={el.title}
                        desc={el.desc}
                        key={`service-${index}`}
                    />)}
                </div>
            </Container>
        </section>
    )
}