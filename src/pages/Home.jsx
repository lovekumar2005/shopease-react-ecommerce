import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Categories from '../components/categories/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PromoBanner from '../components/home/PromoBanner'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <FeaturedProducts/>
        <PromoBanner/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Home