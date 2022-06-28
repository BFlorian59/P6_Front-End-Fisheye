class Media_Card{
    constructor(media)
    {
        this.media = media
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('photo-card-wrapper')
    }

    likesButton(){
     this.$wrapper
            .querySelector('button')
            .addEventListener('click', ()=> {
                    document.getElementById(this.media.id + '-likes-nb').innerHTML = this.media.likes +1
                    const totalLikesNb = parseInt(document.getElementById('plikes').textContent) + 1
                    document.getElementById('plikes').innerHTML = totalLikesNb.toString() + '<i class="fas fa-heart" aria-label="likes"></i>'
            })
    }

    createmedia(){
        // console.log(this.media)
        const Media_Card = `
        <a class="media-link" href="#">
            <${this.media.type} src="assets/photographers/${this.media.photographerId}/${this.media.file}" alt="${this.media.title}"></${this.media.type}/>
        </a>
        <div class="text">
            <p class="pnb">${this.media.title}</p>
            <div class="likes">
                <p id="${this.media.id}-likes-nb">${this.media.likes}</p>
                <button aria-label="heart"><i id="coeur" class="fas fa-heart" aria-label="likes"></i></button>
            <div>
        </div>       
        `

        this.$wrapper.innerHTML = Media_Card
        this.likesButton()
        this.$wrapper.querySelector('a').addEventListener('click', () => {
            const lightbox = new Lightbox()
            lightbox.displaymedia(this.media)
        })
        return this.$wrapper
    }
}
