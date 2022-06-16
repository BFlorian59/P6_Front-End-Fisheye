class InfoPhotographer{
    constructor(photographer)
    {
        this.photographer = photographer;
    }

    displayModal() {
        const formcontact = new Formcontact()
        document.querySelector('.contact').addEventListener('click', () => {
            formcontact.display()
        })
    }

    info(){
        const photographerInfo = document.querySelector('#photographe')
        const picture = `assets/photographers/Photographers ID Photos/${this.photographer.portrait}`;

        const infos = `
        <div class= titre>
            <h2> ${this.photographer.name} </h2>
            <p class="ville">${this.photographer.city}, ${this.photographer.country}</p>
            <p class="tag">${this.photographer.tagline}</p>
        </div>
        <button class="contact" type="button">Contactez-moi</button>
        <div class =img><img src="${picture}" alt="${this.photographer.name}"/></div>

        `
        photographerInfo.innerHTML = infos
        this.displayModal()
    }
}