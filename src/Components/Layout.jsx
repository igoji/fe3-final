import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useDentistStates } from '../Components/utils/global.context'


const Layout = () => {

  const {state} = useDentistStates()

  return (
    <div className={state.darkMode ? 'dark' : null }>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout