import connectDB from "@/config/database"
import Official from "@/models/Official"
import { getSessionUser } from "@/utils/getSessionUser"
import cloudinary from '@/config/cloudinary'

// GET /api/campaigns
export const GET = async (request) => {
    try{
        // params = request.nextUrl.searchParams.get('state')
        // console.log(params)
        await connectDB()

        const officials = await Official.find({})
        console.log(officials)
        return new Response(JSON.stringify(officials), {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return new Response('Something Went Wrong', { status:500})
    }
}

