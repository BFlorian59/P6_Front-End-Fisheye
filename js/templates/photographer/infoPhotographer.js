class InfoPhotographer{
    constructor(photographer)
    {
        this.photographer = photographer;
    }

    // afficher la modal quand on appuie sur le bouton
    displayModal() {
        const formcontact = new Formcontact();
        document.querySelector('.contact').addEventListener('click', () => {
            formcontact.display();
        });
    }

    // faire apparaitre les informations du photographe
    info(){
        const photographerInfo = document.querySelector('#photographe');
        const picture = `assets/photographers/Photographers ID Photos/${this.photographer.portrait}`;

        const infos = `
        <div class= titre>
            <h1> ${this.photographer.name} </h1>
            <h2 class="ville">${this.photographer.city}, ${this.photographer.country}</h2>
            <p class="tag">${this.photographer.tagline}</p>
        </div>
        <button class="contact" type="button">Contactez-moi</button>
        <div class =img><img src="${picture}" alt="${this.photographer.name}"/></div>

        `;
        photographerInfo.innerHTML = infos;
        this.displayModal();
    }
}