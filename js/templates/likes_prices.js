class LikesPrice {
    constructor (photographer, photographerMedias) {
        this.photographer = photographer
        this.photographerMedias = photographerMedias
        this.$photographerLikesPrice = document.querySelector('#likes-price')

    }

    render () {
        const inner = `
      <p id="plikes">${this.getLikesNumber().toString()}<i class="fas fa-heart" ></i></p>
      <p>${this.photographer.price.toString()}€ / jour</p>
    `
        this.$photographerLikesPrice.innerHTML = inner
    }

    getLikesNumber () {
        let likesNb = 0
        this.photographerMedias.forEach((media) => {
            likesNb = likesNb + media.likes
        })
        return likesNb
    }

}
