class Photo_media {
    //stocker les informations des médias photos
    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.file = media.image;
        this.price = media.price;
        this.date = media.date;
        this.likes = media.likes;
        this.alt = media.title;
        this.type = "img";
    }
}