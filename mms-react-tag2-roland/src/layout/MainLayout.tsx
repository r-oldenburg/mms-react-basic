import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () =>
  (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )

export default MainLayout