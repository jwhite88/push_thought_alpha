import { Schema, model, models } from 'mongoose'


const OfficialSchema = new Schema({
    State: {
        type: String,
        required: [true, 'State is required']
    },
    Name: {
        type: String,
        required: [true, 'Name is required']
    },
    Twitter: {
        type: String
    },
}, {
    timestamps: true
})

const Official = models.Official || model('Official', OfficialSchema)

export default Official