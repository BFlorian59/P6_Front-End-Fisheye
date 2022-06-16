class LikesPrice {
    constructor (photographer, photographerMedias) {
        this.photographer = photographer
        this.photographerMedias = photographerMedias
        this.$photographerLikesPrice = document.querySelector('#likes-price')

    }

    render () {
        const Count = new Counter(this.photographer, this.photographerMedias)
        const inner = `
      <p id="plikes">${Count.getLikesNumber().toString()}<i class="fas fa-heart" ></i></p>
      <p>${this.photographer.price.toString()}€ / jour</p>
    `
        this.$photographerLikesPrice.innerHTML = inner
    }

}
