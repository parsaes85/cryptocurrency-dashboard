import Home from "./Pages/Home/Home"
import Transactions from "./Pages/Transactions/Transactions"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Wallet from "./Pages/Wallet/Wallet"

const routes = [
    { path: "/", element: <Home /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/wallet", element: <Wallet /> },
]

export default routes