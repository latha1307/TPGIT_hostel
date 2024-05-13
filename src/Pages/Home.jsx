import { Welcome } from '../components/Welcome'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'


function Home() {
  return (
    <>
        <div>
            <Banner/>
            <div className='bgWelcome  h-[100vh] mt-26 p-20 bg-cover' >
              <Welcome/>
            </div>
            <Footer/>
        </div>
    </>
  )
}


export default Home;
