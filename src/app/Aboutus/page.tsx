
import React from 'react'
import AboutHero from '@/Components/aboutHero'
import AboutSection from '../../../aboutSection'
import AboutPopularProduct from '@/Components/aboutPopularProducts'

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page
