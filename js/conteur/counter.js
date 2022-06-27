class Counter{
    constructor (photographer, photographerMedias) {
        this.photographer = photographer;
        this.photographerMedias = photographerMedias;

    }

    getLikesNumber() {
        let likesNb = 0;
        this.photographerMedias.forEach((media) => {
            likesNb = likesNb + media.likes;
        })
        return likesNb;
    }

}