import React from 'react'
import HeroSection from '../../HeroSection'
import { Pricing } from '../../Pricing'
// import Footer from '../Footer/Footer'
import {homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
function Home() {
    return (<>
       <HeroSection {...homeObjOne} />
       <HeroSection {...homeObjThree} />
       <HeroSection {...homeObjTwo} />
       <Pricing />
       <HeroSection {...homeObjFour} />
       <HeroSection {...homeObjFive} />
       
      
        </>
    )
}

export default Home
