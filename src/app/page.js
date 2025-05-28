
import Hero from './components/hero'
import Location from './components/collectlocation'

import SaleBanner from './components/salebanner'
import Featured from './components/featured'
import NewsEvents from './components/newsevents'
import Footer from './components/footer'


export default function Home() {
  return (
    <div>
      
      <Hero />
      
  
      <SaleBanner />
      <Featured />
      <Location/>
      <NewsEvents />
      <Footer/>
      
    </div>
  )
}
