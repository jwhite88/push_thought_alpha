import { Schema, model, models } from 'mongoose'

const CampaignSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,

    },
    // type: {
    //     type: String,
    //     // required: true
    // },
    description: {
        type: String,
    },
    target_name: {
        type: String
    },
    target_facebook: {
        address: {
            type: String
        },
        is_message_sent: {
            type: Boolean
        },
    },
    target_x: {
        address: {
            type: String
        },
        is_message_sent: {
            type: Boolean
        },
    },
    target_instagram: {
        address: {
            type: String
        },
        is_message_sent: {
            type: Boolean
        },
    },

    // location: {
    //     street:{
    //         type: String
    //     },
    //     city:{
    //         type: String
    //     },
    //     state:{
    //         type: String
    //     },
    //     zipcode:{
    //         type: String
    //     },    
    // },
    // beds: {
    //     type: Number,
    //     required: true
    // },
    // baths: {
    //     type: Number,
    //     required: true        
    // },
    // square_feet: {
    //     type: Number,
    //     required: true
    // },
    // amenities: [
    //     {
    //         type: String
    //     },
    // ],
    // rates: {
    //     nightly: {
    //         type: Number
    //     },
    //     weekly: {
    //         type: Number
    //     },
    //     monthly: {
    //         type: Number
    //     },
    // },
    // seller_info: {
    //     name: {
    //         type: String
    //     },
    //     email: {
    //         type: String
    //     },
    //     phone: {
    //         type: String
    //     },        
    // },
    tags: [
        {
            type: String
        }
    ],
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    },
},{
        timestamps: true
})

const Campaign = models.Campaign || model('Campaign', CampaignSchema)

export default Campaign