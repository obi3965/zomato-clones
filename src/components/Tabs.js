import React from 'react'
import tabs from '../components/data/tabs.json'
import '../styles/tabs.css'



const Tabs = ({ activeTab, setActiveTab }) => {


  return (
   <div className="tab-options">
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div key={tab}
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="tab-image"
                alt={tab.name}
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs