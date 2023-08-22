import { useState, useEffect } from 'react'

import styles from './styles.module.css'
import noImage from '../../assets/img/noimage.png'
import { Snack, SnackNotPublishedYet } from '../../models/Snack'
import { findSnackOfTheDay, sendRate } from '../../services/SnackService'
import { Rating } from 'react-simple-star-rating'

const Home = () => {
  const [snack, setSnack] = useState<Snack>()
  const [snackNotPublishedYet, setSnackNotPublishedYet] =
    useState<SnackNotPublishedYet>()
  const [rate, setRate] = useState(
    localStorage.getItem('rate') ? Number(localStorage.getItem('rate')) : 0
  )

  useEffect(() => {
    ;(async () => {
      const snackOfTheDay = await findSnackOfTheDay()
      if ('message' in snackOfTheDay) {
        setSnackNotPublishedYet(snackOfTheDay)
        setSnack(undefined)
      } else {
        setSnack(snackOfTheDay)
        setSnackNotPublishedYet(undefined)
      }
    })()
  }, [])

  useEffect(() => {
    localStorage.setItem('rate', `${rate}`)
    if (snack && snack.id) {
      sendRate(snack.id, rate)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate])

  return (
    <div className={styles.container}>
      {snackNotPublishedYet && (
        <span className={styles.notPublishedMessage}>
          {snackNotPublishedYet.message}
        </span>
      )}

      {snack && (
        <div className={styles.snackCard}>
          <img
            className={styles.snackThumb}
            src={snack.thumbURL || noImage}
            alt='Foto da merenda'
          />
          <span className={styles.snackTitle}>{snack.title}</span>
          <span className={styles.snackDescription}>{snack.description}</span>
          <span className={styles.snackRateSentence}>Avaliar</span>
          <Rating
            onClick={(rate: number) => setRate(rate)}
            initialValue={rate}
          />
        </div>
      )}
    </div>
  )
}

export default Home
