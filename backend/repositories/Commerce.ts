import { Commerces } from "../models/Commerce";
import { CommerceType } from "../types/Commerce";

class CommerceRepository {
    async createCommerce(commerce: CommerceType) {
        try {
            await Commerces.create(commerce);
        }
        catch(e: any) {
            throw new Error(e);
        }
    }

    async findCommerceAroundMe(longitude: Number, latitude: Number) {
        // TODO
    }
}

export default new CommerceRepository();