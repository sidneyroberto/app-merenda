import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Evaluation from './pages/Evaluation'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/avaliacao',
    element: <Evaluation />,
  },
]

export default routes
