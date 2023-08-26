import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes'
import Header from './components/Header'
import { getUserToken } from './config/firebase'

const App = () => {
  const elements = useRoutes(routes)

  useEffect(() => {
    console.log('Requesting permission...')
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        getUserToken()
      }
    })
  }, [])

  return (
    <>
      <Header />
      {elements}
    </>
  )
}

export default App
