export interface UserType {
    email: String,
	pseudo: String,
	password: String,
	role: String,
	xp: Number,
	foundLocations: [] | [
        {
            commerceId: String,
            coupon: String,
            nextCouponDate: Date
        }
    ]
}