import React, { useState } from 'react'
import Delievery from '../components/layouts/Delievery'
import DiningOut from '../components/layouts/DiningOut'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Nightlife from '../components/layouts/Nightlife'
import Tabs from '../components/Tabs'



const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getTheTabs = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delievery />;
  
        case "Dining Out":
      return <DiningOut />;
  
      case "Nightlife":
        return <Nightlife />;
  
      default:
        return <Delievery />;
    }
  }
  return (
    <div className='container'>
     
      <Header/>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getTheTabs(activeTab)}
       
       <Footer/>
    </div>
  )
}

export default Home