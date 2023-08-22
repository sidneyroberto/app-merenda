import axios, { AxiosInstance } from 'axios'
import { Snack, SnackNotPublishedYet, getSnack } from '../models/Snack'

const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const findSnackOfTheDay = async (): Promise<
  Snack | SnackNotPublishedYet
> => {
  const response = await http.get(
    `${process.env.REACT_APP_SNACK_OF_THE_DAY_ENDPOINT}`,
    {
      validateStatus: (status) => status < 500,
    }
  )

  const { snack } = response.data
  if (snack) {
    const snackOfTheDay = getSnack(snack)
    return snackOfTheDay
  }

  const snackNotPublishedYet: SnackNotPublishedYet = {
    message: 'Ops! O cardápio do dia ainda não foi divulgado... 😢😭',
  }

  return snackNotPublishedYet
}

export const sendRate = async (id: string, rate: number) => {
  console.log('Sending rate...')
  await http.post(`${process.env.REACT_APP_RATE_ENDPOINT}/${id}/${rate}`)
}
