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

const ShareButtons = (campaign) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/campaigns/${campaign._id}`

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Contact your Representatives
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton className='justify-center'
          url={shareUrl}
          quote={campaign.name}
          hashtag={ `#pushthought`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        
        <TwitterShareButton className='justify-center'
          url={shareUrl}
          title={campaign.name}
          hashtags={[`pushthought`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </div>
    </>
  )
}

export default ShareButtons
