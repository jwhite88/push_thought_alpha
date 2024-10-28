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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ShareButtons = ({ campaign, socialData }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/campaigns/${campaign._id}`
  const [social, setSocial] = useState([])

  const ToastInfo = () => (
    <div>
      <h2 style={{ fontSize: '20pt' }} >Did you send your message? Confirm below to be counted in our metrics.</h2>
      <div>
        <lable>
          <span style={{ display: "inline-block", }}>Yes</span> <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "20px", display: "inline-block" }} name="isShared" /> <br />
          <span style={{ display: "inline-block" }}>No</span>  <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "39px", display: "inline-block" }} name="isShared" />
        </lable>
      </div>
    </div>
  )


  const displayXMsg = () => {
    toast(<ToastInfo />, {
      position: "top-center",
      hideProgressBar: true,
      autoClose: false
    })

  }

  useEffect(() => {
    console.log("socialData: ", socialData)
    setSocial(socialData)

  }, [socialData])

  // Safely access target_facebook.address and target_x.address
  const facebookAddress = campaign?.target_facebook?.address || '';
  const twitterAddress = campaign?.target_x?.address || '';

  const xClosed = () => {
    console.log("just closed X")
    displayXMsg()
  }

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
      </h3>
      <ToastContainer
        style={{ marginTop: "300px", fontSize: "52px", width: "600px" }}
      />
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
          onShareWindowClose={xClosed}
        >
          <BsTwitterX size={40} round={true} />
        </TwitterShareButton>

      </div>
    </>
  )
}

export default ShareButtons
