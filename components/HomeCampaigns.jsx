import CampaignCard from './CampaignCard'
import Link from 'next/link'
import { fetchCampaigns } from '@/utils/requests'

const HomeCampaigns = async () => {
  const campaigns = await fetchCampaigns()

  const recentCampaigns = campaigns
    .sort(() => Math.random() - Math.random())
    .slice(0, 3)

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Messaging Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentCampaigns === 0 ? (
              <p>No Campaigns Found</p>
            ) : recentCampaigns.map((campaign) => (
              <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/campaigns"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Properties</Link>
      </section>

    </>
  )
}

export default HomeCampaigns
