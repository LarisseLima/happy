import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `exp://pf-kt3.anonymous.mobile.exp.direct:80/uploads/${image.path}`
            // LAN: http://192.168.0.13:3333
            // WEB: http://localhost:3333
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
};
