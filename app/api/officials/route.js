import connectDB from "@/config/database"
import Official from "@/models/Official"
import { getSessionUser } from "@/utils/getSessionUser"
import cloudinary from '@/config/cloudinary'

// GET /api/campaigns
export const GET = async (request) => {
    try{
        let state = request.nextUrl.searchParams.get('state')
        await connectDB()

        const officials = await Official.find({'State': state})
        console.log(officials)
        return new Response(JSON.stringify(officials), {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return new Response('Something Went Wrong', { status:500})
    }
}

