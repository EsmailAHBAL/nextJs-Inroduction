import '../styles/globals.css'
import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../component/NavNar'


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


const MyApp = ({ Component, pageProps })=>(
  <div className="container">
     <NavBar />
     <Component {...pageProps} />
  </div>
)
export default MyApp



