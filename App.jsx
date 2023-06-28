import {Footer, Navbar, Services, Transactions, Welcome} from "./components";
import { Client } from '@xmtp/xmtp-js'

const App = () => {

    return (
        <div className="min-h-screen">

            <div className="gradient-bg-welcome">
                <Navbar/>
                <Welcome/>
            </div>
            <Services/>
            <Transactions/>
            <Footer/>


        </div>
    )
}

export default App
