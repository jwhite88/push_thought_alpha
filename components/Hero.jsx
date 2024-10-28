import React from 'react'
import CampaignSearchForm from './CampaignSearchForm'

const Hero = () => {
  return (
    <div>
      {/* // <!-- Hero --> */}
      <section className="bg-blue-700 py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Easy political activism
            </h1>
            <p className="my-4 text-xl text-white">
              Contacting congress has never been so quick and simple.
            </p>
          </div>
          <CampaignSearchForm />
        </div>
      </section>
    </div>
  )
}

export default Hero