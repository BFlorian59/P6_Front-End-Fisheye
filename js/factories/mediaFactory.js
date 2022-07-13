class MediaFactory {
    //Créer les bons objets médias si ils sont une image ou une vidéo
    constructor (data) {
        if (Object.prototype.hasOwnProperty.call(data, "image")) {
            return new Photo_media(data);
        } else if (Object.prototype.hasOwnProperty.call(data, "video")) {
            return new Video_media(data);
        }else {
            throw "Unknown type format";
        }
    }
}