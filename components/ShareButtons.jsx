import { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,

} from 'react-share'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const ShareButtons = ({ campaign, socialData }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/campaigns/${campaign._id}`
  const [social, setSocial] = useState([])

  useEffect(() => {
    console.log("socialData: ", socialData)
    setSocial(socialData)

  }, [socialData])


  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        {/* Contact your Representatives */}
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton className='justify-center'
          url={shareUrl}
          // quote={`${campaign.name} ${campaign.target_facebook.address}`}
          hashtag={`${campaign.name} ${campaign.target_facebook.address} #pushthought`}
        >
          <FaFacebookF size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton className='justify-center'
          url={shareUrl}
          // title={campaign.name}
          // title={social !== null && social.length > 0 && `${social[0]['Twitter']} ${campaign.name}`}
          title={`${campaign.target_x.address} ${campaign.name}`}
          hashtags={[`pushthought`]}
        >
          <BsTwitterX size={40} round={true} />
        </TwitterShareButton>

      </div>
    </>
  )
}

export default ShareButtons
