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

  // Safely access target_facebook.address and target_x.address
  const facebookAddress = campaign?.target_facebook?.address || '';
  const twitterAddress = campaign?.target_x?.address || '';

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
      </h3>
      <div className="flex gap-3 justify-center pb-1 pt-1">
        <FacebookShareButton className='justify-center'
          url={shareUrl}
          // quote={`${campaign.name} ${campaign.target_facebook.address}`}
          hashtag={`${campaign.name} ${facebookAddress} #pushthought`}
        >
          <FaFacebookF size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton className='justify-center'
          url={shareUrl}
          // title={campaign.name}
          // title={social !== null && social.length > 0 && `${social[0]['Twitter']} ${campaign.name}`}
          title={`${twitterAddress} ${campaign.name}`}
          hashtags={[`pushthought`]}
        >
          <BsTwitterX size={40} round={true} />
        </TwitterShareButton>

      </div>
    </>
  )
}

export default ShareButtons
