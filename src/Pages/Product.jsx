import React from 'react'
import ProductPage from '../Components/ProductPage/ProductPage'
import Footer from '../Components/Footer'
import ProductDisplay from '../Components/ProductPage/ProductDisplay'
import ImageCarousel from '../Components/ProductPage/ImageCarousel'

function Product() {
  return (
    <div className='bg-black'>
        <ProductPage />
        <ProductDisplay />
        <ImageCarousel />
        <Footer />
    </div>
  )
}

export default Product