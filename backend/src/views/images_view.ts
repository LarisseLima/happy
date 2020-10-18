import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.13:3333/uploads/${image.path}`
            // WEB: http://localhost:3333
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
};
