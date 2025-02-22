export interface UserType {
    email: String,
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