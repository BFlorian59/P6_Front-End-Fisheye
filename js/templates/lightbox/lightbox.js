class Lightbox{
    constructor(medias){
        this.medias =medias;
        this.$lightbox = document.querySelector('#lightbox');
        this.$main = document.querySelector('.main-wrapper');
        this.$attachedMedia = document.activeElement;
    }

    // afficher les médias dans la lightbox
    displaymedia (media) {
        const picture = `assets/photographers/${media.photographerId}/${media.file}`;
        const imageElement = `
            <${media.type} controls autoplay  src="${picture}" media-id="${media.id}" class="lightbox-img" alt="${media.title}" />
            <p>${media.title}</p>
        `;
        document.querySelector('.lightbox-media').innerHTML = imageElement;

        this.$main.setAttribute('aria-hidden', 'true');
        this.$main.style.display = 'none';
        this.$lightbox.setAttribute('aria-hidden', 'false');
        this.$lightbox.style.display = 'flex';
        this.onCloseButton();
        this.$lightbox.querySelector('button').focus();
    }

    // faire passer aux médias suivant
    nextmedia(direction){
        //Obtenir l'index dans les médias de l'image courante avec l'attribut media-id ajouté par la fonction d'affichage Lightbox
        const currentMediaId = document.querySelector('.lightbox-img').getAttribute('media-id');
        let mediaIndex;
        for (let i = 0; i < this.medias.length; i++) {
            if (this.medias[i].id.toString() === currentMediaId) {
                mediaIndex = i;
            }
        }
        if (direction === 'gauche' && mediaIndex === 0) {
            mediaIndex = this.medias.length - 1;
        } else if (direction === 'gauche') {
            mediaIndex--;
        }

        if (direction === 'droite' && mediaIndex === this.medias.length - 1) {
            mediaIndex = 0;
        } else if (direction === 'droite') {
            mediaIndex++;
        }

        // afficher l'image suivante
        const lightboxMedia = document.querySelector('.lightbox-media');
        const pictureindex = `assets/photographers/${this.medias[mediaIndex].photographerId}/${this.medias[mediaIndex].file}`;
        lightboxMedia.innerHTML = '';
        const imageElement = `
          <${this.medias[mediaIndex].type} controls autoplay src='${pictureindex}' media-id='${this.medias[mediaIndex].id}' class='lightbox-img' alt='${this.medias[mediaIndex].title}' />
          <p>${this.medias[mediaIndex].title}</p>
        `;
        lightboxMedia.innerHTML = imageElement;
    }

    // faire disparaitre la lightbox
    none () {
        this.$main.style.display = 'block';
        this.$main.setAttribute('aria-hidden', 'false');
        this.$lightbox.setAttribute('aria-hidden', 'true');
        this.$lightbox.style.display = 'none';
        this.$attachedMedia.focus();
    }

    echap(){
        // Close modal when escape key is pressed
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
              this.none();
            }
        });
    }

    //ferme la lightbox quand on appuie sur la croix
    onCloseButton () {
        this.$lightbox.querySelector('button').addEventListener('click', () => {
            this.none();
        });
    }
        
 
    //l’accessibilité sur les flèches
    eventarrow(){
        document.querySelector('#fleche-droite').addEventListener('click', () => {
            this.nextmedia('droite');
        });
        document.querySelector('#fleche-gauche').addEventListener('click', () => {
            this.nextmedia('gauche');
        });
        addEventListener('keydown', event =>{
            switch (event.key){
                case 'droite':
                    this.nextmedia('droite');
                    break;
                case 'gauche':
                    this.nextmedia('gauche');
                    break;
            }
        });
    }
    
  // afficher les éléments dans le html 
  render () {
    this.$lightbox.setAttribute('aria-hidden', true);
    this.$lightbox.setAttribute('aria-label', 'image closeup view');
    const Content = `
        <button href="#" class="cross" aria-label="close"></button>
        <a href="#" class="arrow left" id="fleche-gauche" aria-label="media précédent"></a>
        <div class="lightbox-media"></div>
        <a href="#" class="arrow right" id="fleche-droite" title="fleche droite" aria-label="media suivant"></a>
    `;
    this.$lightbox.innerHTML = Content;
    this.eventarrow();
    this.echap();

    }
}