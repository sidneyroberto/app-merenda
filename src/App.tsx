import { useRoutes } from 'react-router-dom'

import routes from './routes'
import Header from './components/Header'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <>
      <Header />
      {elements}
    </>
  )
}

export default App
