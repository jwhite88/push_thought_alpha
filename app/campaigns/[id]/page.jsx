'use client'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchCampaign } from "@/utils/requests"
import CampaignHeaderImage from "@/components/CampaignHeaderImage"
import CampaignDetails from "@/components/CampaignDetails"
import Link from "next/link"
import CampaignImages from "@/components/CampaignImages"
import BookmarkButton from "@/components/BookmarkButton"
import CampaignContactForm from "@/components/CampaignContactForm"
import ShareButtons from "@/components/ShareButtons"
import Spinner from "@/components/Spinner"
import { FaArrowLeft } from "react-icons/fa"


const CampaignPage = () => {

  const { id } = useParams()

  const [campaign, setCampaign] = useState(null)
  const [loading, setLoading] = useState(true)
  // need a state var
  const [socialData, setSocialData] = useState([])


  useEffect(() => {
    const fetchCampaignData = async () => {
      if (!id) return

      try {
        const campaign = await fetchCampaign(id)
        // console.log("campaign:", campaign)
        setCampaign(campaign)
      } catch (error) {
        console.error('Error fetching campaign: ', error)
      } finally {
        setLoading(false)
      }

    }

    if (campaign === null) {
      fetchCampaignData()
    }

  }, [id, campaign])

  if (!campaign && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Campaign Not Found
      </h1>
    )
  }

  // function getData(data) {
  //   console.log("MYDATA::", data)
  //   // get the officials data
  // }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && campaign && (<>
        <CampaignHeaderImage image={campaign.images[0]} />

        <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

              <CampaignDetails campaign={campaign} />

              {/* <!-- Sidebar --> */}
              <aside className="space-y-4">
                {/* <BookmarkButton campaign={campaign}/> */}

                <CampaignContactForm campaign={campaign} setSocialData={setSocialData} />
                <ShareButtons socialData={socialData} campaign={campaign} />

              </aside>
            </div>
          </div>
        </section>

        <CampaignImages images={campaign.images} />

      </>
      )}
    </>
  )
}

export default CampaignPage
