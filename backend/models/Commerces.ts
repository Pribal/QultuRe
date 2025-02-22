import mongoose from "mongoose";

const CommerceSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    name: { type: String, required: true},
    description: { type: String},
    image: { type: String, required: true},
    address: { type: String, required: true},
    type: { type: String, enum: ["commerce", "restaurant"], required: true},
    contact: { type: String, required: true}
})

export const Commerces = mongoose.model('commerces', CommerceSchema);