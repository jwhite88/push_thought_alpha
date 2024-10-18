import { Schema, model, models } from 'mongoose'

const CampaignSupportedSchema =  new Schema({
    campaignsupported: [
        {
            campaignId: Schema.Types.ObjectId,
            twitter: {
                decisionMaker: {
                    engaged: Boolean,
                },
                senator1: {
                    engaged: Boolean,
                },
                senator2: {
                    engaged: Boolean,
                },
                activistMessage: {
                    engaged: Boolean
                },
                representative: {
                    engaged: Boolean
                }
            },
            facebook: {
                decisionMaker: {
                    engaged: Boolean,
                },
                senator1: {
                    engaged: Boolean,
                },
                senator2: {
                    engaged: Boolean,
                },
                activistMessage: {
                    engaged: Boolean
                },
                representative: {
                    engaged: Boolean
                }
            },
            instagram: {
                decisionMaker: {
                    engaged: Boolean,
                },
                senator1: {
                    engaged: Boolean,
                },
                senator2: {
                    engaged: Boolean,
                },
                activistMessage: {
                    engaged: Boolean
                },
                representative: {
                    engaged: Boolean
                }
            }
        }
    ],
})

const CampaignSupported = models.CampaignSupported || model('CampaignSupported', CampaignSupportedSchema);

export default CampaignSupported
