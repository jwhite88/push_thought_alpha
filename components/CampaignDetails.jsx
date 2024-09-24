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
            </div>
          </main>
  )
}

export default CampaignDetails
