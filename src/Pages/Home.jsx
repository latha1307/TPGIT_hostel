import { Welcome } from '../components/Welcome'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { HomeBody } from '../components/HomeBody';


function Home() {
  return (
    <>
        <div className='bg-[#F5F5F5]'>
            <Banner/>
            <div className='bgWelcome  h-[100vh] mt-26 lg:p-16 p-8 bg-cover' >
              <Welcome/>
            </div>
            <div>
              <HomeBody/>
            </div>
            <Footer/>
        </div>
    </>
  )
}


export default Home;
