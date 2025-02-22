import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true, enum: ["user", "vendor"] },
	xp: { type: Number, default: 0 },
	foundLocations: [
        {
            commerceId: { type: String, required: true },
            coupon: { type: String },
            nextCouponDate: { type: Date }
        }
    ]
})

export const User = mongoose.model('User', UserSchema);