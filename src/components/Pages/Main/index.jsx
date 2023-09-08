import Image from 'next/image'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Counter } from '../../UI/Counter'
import classNames from 'classnames'
import { usePost } from '@/services'
import Banner from '@/components/UI/Banner/Banner'
import Services from '@/components/UI/ServiceSection/Service'
import AboutSection from '@/components/UI/AboutSection/AboutSection'
import NewsSection from '@/components/UI/NewsSection/News'
import ContactForm from '@/components/UI/ContactForm/ContactForm'
export function Main() {
  const { t } = useTranslation('common')

  const [active, setActive] = useState(false)
  const { posts, createMutation } = usePost({
    params: { limit: 10, page: 1 }
  })

  const addPost = () => {
    createMutation.mutate({
      data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    })
  }

  return (
    <main>
      <Banner />
      <Services />
      <AboutSection />
      <NewsSection />
      <ContactForm />
    </main>
  )
}
