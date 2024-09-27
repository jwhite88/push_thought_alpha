import React from 'react'
import { 
    FaBed,
    FaBath,
    FaRulerCombined,
    FaTimes,
    FaCheck,
    FaMapMarker
 } from 'react-icons/fa'

const CampaignDetails = ({campaign}) => {
  return (
        <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-center"
            >
              <h1 className="text-3xl font-bold mb-4">{campaign.name}</h1>
              <p className="text-gray-500 mb-4 text-center">
                {campaign.description}
              </p>
              <div className='campaign-tags mx-auto bg-white'>
              {campaign.tags.map((item, index) => {
                return (
                  <div key={index} className='campaign-tag-items border-black'>
                    {item}
                  </div>
                )
              } )}
              </div>

            </div>
          </main>
  )
}

export default CampaignDetails
