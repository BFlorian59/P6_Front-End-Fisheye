class App {
    constructor() {
    }
    // récupérer la base de donnée 
    async fetch() {
        const api = new Api('data/photographers.json')
        const data = await api.getPhotographer()

        const url = new URL(window.location)
        const params = new URLSearchParams(url.search.slice(1))
        const photographerName = (params.get('name'))

        // Obtenir le photographe selon le nom
        data.photographers.forEach((nom) => {
            if (nom.name === photographerName) {
                this.photographer = nom
                console.log(photographerName)
            }
        })    
    }
    async main () {

        //instancier la class InfoPhotographer + appele de la méthode info
        await this.fetch()
        const photographe = new InfoPhotographer(this.photographer)
        photographe.info()
    }
}

const app = new App()
app.main()

