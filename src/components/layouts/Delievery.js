import React from 'react'
import Filters from '../core'
import '../../styles/delievery.css'
import DelieveryCollection from '../core/DelieveryCollection'
import TopBrand from '../core/TopBrand'
import Explore from '../core/Explore'
import restaurants from '../data/restaurant.json'

const Delievery = () => {
  const restaurantsList = restaurants;


  const deliveryData = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
      id: 6,
      title: "Great Offers",
    },
  ];

  return (
    <div>

<div className="max-width">
        <Filters filterList={deliveryData} />
        <DelieveryCollection />
        <TopBrand />

        <Explore restaurants={restaurantsList} collectionName="Delivery Restaurants in Bangalore" />
      </div>
    </div>
  )
}

export default Delievery