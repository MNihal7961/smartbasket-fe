import React from 'react'
import { usePageMeta } from '../../hooks/usePageMeta'
import Banner from './components/Banner'
import ProductList from './components/ProductList'

const Home: React.FC = () => {
  usePageMeta("Home | Smart Basket", "This is the home page of smart basket app.")
  return (
    <main className='flex flex-col gap-y-5'>
      {/* <CategoryGrid/> */}
      <Banner/>
      <ProductList/>
    </main>
  )
}

export default Home