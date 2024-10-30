import { useEffect, useState } from 'react'
import Image from 'next/image';
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
import ToastInfo from './ToastInfo';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { ImCheckmark } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import clsx from 'clsx';
import "../assets/styles/checkmarks.css"
import greenCheck from "../assets/images/green_check.png"

const ShareButtons = ({ campaign, socialData }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/campaigns/${campaign._id}`
  const [social, setSocial] = useState([])
  const [isShowingX, setIsShowingX] = useState(true)
  const [isShowingFB, setIsShowingFB] = useState(false)
  const [messageSent, setMessageSent] = useState("")


  // const ToastInfo = ({ setMessageSent }) => {
  //   const [toastShared, setToastShared] = useState("")
  //   const onMessageChange = (event) => {
  //     let message = event.target.value
  //     console.log("toastShared: ", toastShared)
  //     console.log("For sent msg", event.target.value)
  //     setToastShared(message)
  //     // setMessageSent(message)
  //     myMethod(message)
  //   }

  //   return (
  //     <div>
  //       <h2 style={{ fontSize: '20pt' }} >Did you send your message? Confirm below to be counted in our metrics.</h2>
  //       <div>
  //         <label>
  //           <span style={{ display: "inline-block", }}>Yes</span> <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "20px", display: "inline-block" }} name="isShared" value={"Yes"} onChange={onMessageChange} /> <br />
  //         </label>
  //         <label>
  //           <span style={{ display: "inline-block" }}>No</span>  <input type="radio" style={{ transform: "scale(3.5)", position: "relative", bottom: "10px", left: "39px", display: "inline-block" }} name="isShared" value={"No"} onChange={onMessageChange} />
  //         </label>
  //         {/* <button onClick={console.log("button firing")}>Submit</button> */}
  //       </div>
  //     </div>
  //   )
  // }

  const CloseButton = ({ closeToast }) => {
    return (
      <i
        style={{ fontSize: "32px", position: "relative", top: "130px", right: "180px", border: "2px solid black", padding: "10px 8px 20px 8px", width: "auto", height: "70px", fontStyle: "normal", color: "white", backgroundColor: "green", borderRadius: "10px" }}
        onClick={closeToast}
      >Submit</i>
    )
  }

  const postingMessage = () => {
    console.log("message value", messageSent)
  }

  const displayXMsg = () => {
    toast(<ToastInfo
      // messageSent={messageSent}
      setMessageSent={setMessageSent}
    />, {
      position: "top-center",
      hideProgressBar: true,
      autoClose: false,
      onClose: postingMessage
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
        closeButton={CloseButton}
      />
      <div className="flex gap-3 justify-center pb-1 pt-1">
        <FacebookShareButton className='justify-center'
          url={shareUrl}
          // quote={`${campaign.name} ${campaign.target_facebook.address}`}
          hashtag={`${campaign.name} ${facebookAddress} #pushthought`}
        >
          <FaFacebookF size={40} round={true} />
        </FacebookShareButton>
        {/* <IoCheckmarkCircleSharp
          style={{ color: "#018749", width: "24px", height: "24px", position: "relative", right: "25px", bottom: "4px" }}
          className={clsx({
            'show': isShowingFB,
            'hide': !isShowingFB
          })}
        /> */}
        <Image
          src={greenCheck}
          style={{ width: "24px", height: "24px", position: "relative", right: "30px", bottom: "4px" }}
          alt="Facebook"
          className={clsx({
            'show': isShowingFB,
            'hide': !isShowingFB
          })}
        />

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
        {/* <ImCheckmark
          style={{ color: "#018749", width: "24px", height: "24px", position: "relative", right: "30px", bottom: "4px" }}
          className={clsx({
            'show': isShowingX,
            'hide': !isShowingX
          })}
        /> */}
        <Image
          src={greenCheck}
          style={{ width: "24px", height: "24px", position: "relative", right: "30px", bottom: "4px" }}
          alt="X"
          className={clsx({
            'show': isShowingX,
            'hide': !isShowingX
          })}
        />
      </div>
    </>
  )
}

export default ShareButtons
