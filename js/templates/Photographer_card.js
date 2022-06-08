class Photographer_card{
    constructor(photographer)
    {
        this.photographer = photographer;
    }

    createphotographer(){
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('photographer_card_wrapper')
        const picture = `assets/photographers/Photographers ID Photos/${this.photographer.portrait}`;
        
        //modification url
        let url = new URL(window.location);
        let params = new URLSearchParams(url.search.slice(1));
        params.set('id', this.photographer.id);
        console.log(params.has('id'));
        params.append('name', this.photographer.name);
        console.log(params.getAll('name'));
        console.log(params.toString());

        const Card_photographer = `
        <a href="photographer.html?photographer_id=${params.toString()} ">
            <img src="${picture}" alt="${this.photographer.name}"/>
            <h2> ${this.photographer.name} </h2>
        </a>
        <p>${this.photographer.city}, ${this.photographer.country}</p>
        <p>${this.photographer.tagline}</p>
        <p>${this.photographer.price}€/jour</p> `
        $wrapper.innerHTML = Card_photographer
        return $wrapper
    }
}