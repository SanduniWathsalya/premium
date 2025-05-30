"use client"
import Hero from './components/hero'
import Location from './components/collectlocation'
import Cards from './components/twocards'
import Featured from './components/featured'
import NewsEvents from './components/newsevents'
import Footer from './components/footer'


export default function Home() {
  return (
    <div>
      
      <Hero />
      <Cards />
      <Featured />
      <Location/>
      <NewsEvents />
      <Footer/>
      
    </div>
  )
}
