import Image from 'next/image'
import styles from './Styles.module.scss'
import OutlinedButton from '../OutlinedBtn/OutlinedBtn'


export default function NewsCard({src, datatext, title, desc, ...props}) {
    return (
        <div className={styles.card} {...props}>
            <div className={styles.imageBox}>
                <img src={src} layout='fill' width={294} height={192}/>
            </div>
            <div className={styles.textBox}>
                <p>{datatext} </p>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}   