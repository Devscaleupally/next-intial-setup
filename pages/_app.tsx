import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import store from '../redux/store';
import { Footer, Header } from '../components';
import '../style/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store.reduxStore}>
    {/* if you enabled PersistGate you may have some problem with setting the meta tags  */}
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <div >
        <Header />
      </div>
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    {/* </PersistGate> */}
  </Provider>
}