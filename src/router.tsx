import { createBrowserRouter } from 'react-router-dom'
import Common from '@/page/Common'
import ModalMain from './page/modal/ModalMain'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Common />,
    children: [{ path: 'modal', element: <ModalMain /> }],
  },
])

export default Router
