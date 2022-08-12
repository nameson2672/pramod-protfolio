import Alert from '../components/alert'
import Footer from '../components/footer'
import NavBar from './NavBar'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <NavBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}
