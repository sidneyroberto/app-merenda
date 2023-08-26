import axios, { AxiosInstance } from 'axios'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAg2n8QFKttyo8esYje_oSGyUSrQa3nt4I',
  authDomain: 'imagens-merenda-ifms.firebaseapp.com',
  projectId: 'imagens-merenda-ifms',
  storageBucket: 'imagens-merenda-ifms.appspot.com',
  messagingSenderId: '600466379702',
  appId: '1:600466379702:web:77660f25c45cdf8e746717',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp)
export const getUserToken = async () => {
  try {
    console.log(`VAP key: ${process.env.REACT_APP_MESSAGING_KEY}`)
    const currentToken = await getToken(messaging, {
      vapidKey: `${process.env.REACT_APP_MESSAGING_KEY}`,
    })
    if (currentToken) {
      sendTokenToServer(currentToken)
    } else {
      console.log(
        'No registration token available. Request permission to generate one.'
      )
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err)
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
  })

const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const sendTokenToServer = async (token: string) => {
  console.log(`Token: ${token}`)
  const response = await http.post(
    `${process.env.REACT_APP_TOKEN_ENDPOINT}`,
    {
      deviceToken: token,
    },
    {
      validateStatus: (status) => status < 500,
    }
  )

  if (response.status === 201) {
    console.log('Token sent to server successfully')
  } else {
    console.error('Failed to send token to server')
  }
}
