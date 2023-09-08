import { Container } from "@mui/material";
import Input from "../Forms/Input/Input";
import styles from './Styles.module.scss'
import MainButton from "../MainButton/MainButton";
import { useState } from "react";


export default function ContactForm() {
    const [state, setState] = useState({
        name: "",
        email: "",
        service: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleChangeField = (e) => {
        setState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }))
      }
    return (
        <section className={styles.root} id="contact">
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.textBox}>
                        <span>Flat Discount </span>
                        <h2>Claim upto 50% offer on ‍the most popular services...</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words.</p>
                    </div>
                    <div className={styles.contactForm}>
                        <form className={styles.form} onSumbit={onSubmit}>
                            <Input 
                                size="large"
                                labelText="Name"
                                withBorder
                                fullWidth
                                type="text"
                                required
                                placeholder="Name"
                                value={state.name}
                                name="name"
                                onChange={handleChangeField}
                            />
                            <Input 
                                size="large"
                                labelText="Name"
                                withBorder
                                fullWidth
                                type="email"
                                required
                                placeholder="Email"
                                value={state.email}
                                name="email"
                                onChange={handleChangeField}
                            />
                            <Input 
                                size="large"
                                labelText="Name"
                                withBorder
                                fullWidth
                                type="text"
                                required
                                placeholder="A service you need"
                                value={state.service}
                                onChange={handleChangeField}
                                name="service"
                            />
                            <MainButton 
                                sx={{width: '100% !important', marginTop: "20px"}}
                                type="submit"
                                fullWidth={true}
                                text="GET AN APPOINTMENT"
                            />
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}