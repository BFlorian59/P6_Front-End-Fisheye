class Photographer_card{
    constructor(photographer)
    {
        this.photographer = photographer;
    }

    // afficher les informations des photographes dans la page d'accueil
    createphotographer(){
        const $section = document.createElement('div');
        $section.classList.add('photographer_card_wrapper');
        const picture = `assets/photographers/Photographers ID Photos/${this.photographer.portrait}`;
        
        //modification url
        let url = new URL(window.location);
        let params = new URLSearchParams(url.search.slice(1));
        params.set('photographer_id', this.photographer.id);
        params.append('name', this.photographer.name);

        // modification html
        const Card_photographer = `
        <a href="photographer.html?${params.toString()} ">
            <img src="${picture}" alt="${this.photographer.name}"/>
            <h2> ${this.photographer.name} </h2>
        </a>
        <p>${this.photographer.city}, ${this.photographer.country}</p>
        <p>${this.photographer.tagline}</p>
        <p>${this.photographer.price}€/jour</p> `;
        $section.innerHTML = Card_photographer;
        return $section;
    }
}