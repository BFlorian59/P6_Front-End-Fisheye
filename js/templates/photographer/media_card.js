class Media_Card{
    constructor(media)
    {
        this.media = media
        this.medias = medias

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('photo-card-wrapper')


    }

    likesButton(){
     this.$wrapper
            .querySelector('button')
            .addEventListener('click', ()=> {
                    document.getElementById(this.media.id + '-likes-nb').innerHTML = this.media.likes +1
            })
    }

    createmedia(){
        // const likesButton = new Likebutton(this.medias, this.$wrapper )
        // console.log(this.media)
        const Media_Card = `
        <a class="media-link" href="#">
            <${this.media.type} src="assets/photographers/${this.media.photographerId}/${this.media.file}" alt="${this.media.title}"/>
        </a>
        <div class="text">
            <p class="pnb">${this.media.title}</p>
            <div class="likes">
                <p id="${this.media.id}-likes-nb">${this.media.likes}</p>
                <button><i id="coeur" class="fas fa-heart"></i></button>
            <div>
        </div>       
        `

        this.$wrapper.innerHTML = Media_Card
        this.likesButton()
        // likesButton.likesButton()
        return this.$wrapper
    }
}
