export interface CommerceType {
    location: {
        type: String,
        coordinates: [Number]
    },
    name: String,
    description: String,
    image: String,
    address: String,
    type: String,
    contact: String,
}