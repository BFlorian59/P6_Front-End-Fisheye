class App {
    constructor() {
        this.medias = [];
    }
    // récupérer la base de donnée 
    async fetch() {
        const api = new Api('data/photographers.json');
        const data = await api.getPhotographer();

        const url = new URL(window.location);
        const params = new URLSearchParams(url.search.slice(1));
        const photographerName = (params.get('name'));
        const photographerId = parseInt(params.get('photographer_id'));

        // Obtenir le photographe selon le nom
        data.photographers.forEach((nom) => {
            if (nom.name === photographerName) {
                this.photographer = nom;
                console.log(photographerName);
            }
        });

        // Obtenir les média selon le photographerId
        data.media.forEach((media) => {
            if (media.photographerId === photographerId) {
                this.medias.push(media);
                console.log(photographerId);

            }
        })    
    }
    async main () {
        const $main = document.querySelector('#gallery')
        await this.fetch();        
        //instancier la class InfoPhotographer + appele de la méthode info
        const photographe = new InfoPhotographer(this.photographer)
        photographe.info();
        
        const medias = this.medias.map((media) => new MediaFactory(media));
        let media = null;
        medias.forEach((item)=> {
            const pCard = new Media_Card(item);
            const pCardElement =pCard.createmedia();
            $main.appendChild(pCardElement);
        })

        const sorterform = new Sorterform(medias);
        sorterform.render();
        sorterform.sorterMedias('Popularité');

        const likesPrice = new LikesPrice(this.photographer, medias);
        likesPrice.render();

        const modalForm = new Formcontact(this.photographer, this.verifiation);
        modalForm.form();

        const lightbox = new Lightbox(medias);
        lightbox.render();

    }
}

const app = new App();
app.main();

