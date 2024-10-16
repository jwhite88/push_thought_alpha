import connectDB from "@/config/database"
import Campaign from "@/models/Campaign"
import { getSessionUser } from "@/utils/getSessionUser"
import cloudinary from '@/config/cloudinary'


// GET /api/campaigns
export const GET = async (request) => {
    try{
        await connectDB()

        const campaigns = await Campaign.find({})
        
        return new Response(JSON.stringify(campaigns), {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return new Response('Something Went Wrong', { status:500})
    }
}

export const POST = async (request) => {
    try {
        await connectDB()

        const sessionUser = await getSessionUser()

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', { status: 401 })
        }

        const { userId } = sessionUser

        const formData = await request.formData()

        for (const [key, value] of formData.entries()) {
            console.log(`${key} and ${value}`)
        }

        // Access all values from amenities and images
        // const amenities = formData.getAll('amenities')
        const images = formData.getAll('images').filter((image) => image.name !== '')
        const tags = formData.getAll('tags')

        // Create campaignData object for database
        const campaignData = {
            // type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            tags: formData.getAll('tags'),
            target_name: formData.get('target_name'),
            target_x: {
                address: formData.get('target_x'),
                is_message_sent: false,
            },
            target_facebook: {
                address: formData.get('target_facebook'),
                is_message_sent: false,
            },
            target_instagram: {
                address: formData.get('target_instagram'),
                is_message_sent: false,
            },               
            x_repost_id: formData.get('x_repost_id'),
            facebook_repost_id: formData.get('facebook_repost_id'),
            instagram_repost_id: formData.get('instagram_repost_id'),                        
            // location: {
            //     street: formData.get('location.street'),
            //     city: formData.get('location.city'),
            //     state: formData.get('location.state'),
            //     zipcode: formData.get('location.zipcode'),
            // },
            // beds: formData.get('beds'),
            // baths: formData.get('baths'),
            // square_feet: formData.get('square_feet'),
            // amenities,
            // rates: {
            //     weekly: formData.get('rates.weekly'),
            //     monthly: formData.get('rates.monthly'),
            //     nightly: formData.get('rates.nightly'),
            // },
            // seller_info: {
            //     name: formData.get('seller_info.name'), // This line is not working and returning null
            //     email: formData.get('seller_info.email'),
            //     phone: formData.get('seller_info.phone'),
            // },
            owner: userId,
        }

        // Upload image(s) to Cloudinary
        const imageUploadPromises = []

        for (const image of images) {
            const imageBuffer = await image.arrayBuffer()
            const imageArray = Array.from(new Uint8Array(imageBuffer))
            const imageData = Buffer.from(imageArray)

            // Convert the image data to base64
            const imageBase64 = imageData.toString('base64')

            // Make request to upload to Cloudinary
            const result = await cloudinary.uploader.upload(
                `data:image/png;base64,${imageBase64}`,{
                    folder: 'pushthoughtfolder'
                }
            )

            imageUploadPromises.push(result.secure_url)

            // Wait for all images to upload
            const uploadedImages = await Promise.all(imageUploadPromises)
            // Add uploaded images to the campaignData object
            campaignData.images = uploadedImages

        }
        const newCampaign = new Campaign(campaignData)
        await newCampaign.save()

        return Response.redirect(`${process.env.NEXTAUTH_URL}/campaigns/${newCampaign._id}`)

        // return new Response(JSON.stringify({ message: 'Success' }), {
        //     status: 200,
        // })
    } catch (error) {
        console.log(error)
        return new Response('Failed to add campaign', { status: 500 })
    }
}