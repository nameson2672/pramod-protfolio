import Alert from '../components/alert'
import Footer from '../components/footer'
import NavBar from './NavBar'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="bg-gray-700">
      <div className='container w-full md:max-w-6xl mx-auto'>
      <NavBar />
      </div>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
