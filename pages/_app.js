import DefaultLayout from '../component/layout/DefaultLayout'
import 'antd/dist/antd.css';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  ) 
}

export default MyApp
