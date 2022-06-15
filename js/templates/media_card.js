class Media_Card{
    constructor(media)
    {
        this.media = media
        this.medias = medias

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('photo-card-wrapper')
    }

    createmedia(){
        console.log(this.media)
        const Media_Card = `
        <a class="media-link" href="#">
            <${this.media.type} src="assets/photographers/${this.media.photographerId}/${this.media.file}" alt="${this.media.title}"/>
        </a>
        <div class="text">
            <p class="pnb">${this.media.title}</p>
            <div class="likes">
                <p id="${this.media.id}-likes-nb">${this.media.likes}</p>
                <button><i class="fas fa-heart" aria-label="likes"></i></button>
            <div>
        </div>       
        `
        this.$wrapper.innerHTML = Media_Card
        return this.$wrapper
    }
}
