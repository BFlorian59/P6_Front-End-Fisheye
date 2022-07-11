class LikesPrice {
    constructor (photographer, photographerMedias) {
        this.photographer = photographer;
        this.photographerMedias = photographerMedias;
        this.$photographerLikesPrice = document.querySelector('#likes-price');

    }

    //afficher le nombre de total de coeur
    render () {
        const Count = new Counter(this.photographer, this.photographerMedias);
        const inner = `
      <p id="plikes">${Count.getLikesNumber().toString()}<i class="fas fa-heart" aria-label="likes" ></i></p>
      <p>${this.photographer.price.toString()}€ / jour</p>
    `;
        this.$photographerLikesPrice.innerHTML = inner;
    }

}
