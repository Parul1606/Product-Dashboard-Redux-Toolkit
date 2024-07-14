import { Outlet } from 'react-router-dom'
import Navbars from "./Navbars"
import { Provider } from 'react-redux'
import store from "../store/store"

const RootLayout = () => {
    return(
      <>
      <Provider store={store}>
          <Navbars />

          <main>
            <Outlet />
          </main>
        </Provider>
      </>
        
    )
}

export default RootLayout