class Sorterform{
    constructor (medias) {
        this.medias = medias
        this.ProxyPhoto = new ProxyPhoto()
        this.$tri = document.querySelector('#listbox-wrapper')
        this.$mediaWrapper = document.querySelector('#gallery')
    }

    async sorterMedias (order) {
        this.clearMoviesWrapper()

         if (!!order) {
            const sortedData = await this.ProxyPhoto.sorter(this.medias, order)
             const SortedMedia = sortedData.data 

            SortedMedia.forEach(Media => {
                const Template = new Media_Card(Media)
                this.$mediaWrapper.appendChild(Template.createmedia())
            })
        } else {
            this.medias.forEach(Media => {
                const Template = new Media_Card(Media)
                this.$mediaWrapper.appendChild(Template.createmedia())
            })
        }
    }

    onChangeSorter() {
        this.$tri
            .querySelector('form')
            .addEventListener('change', e => {
                const sorter = e.target.value
                this.sorterMedias(sorter)
            })
    }

    clearMoviesWrapper() {
        this.$mediaWrapper.innerHTML = ""
    }


    render () {
        const inner = `
        <form action="#" method="POST" class="sorter-form">
                <label for="sorter-select">Triez par : </label>
                <select name="sorter-select" id="sorter-select">
                    <option value="">Aucun filtre</option>                    
                    <option value="Popularité">Popularité</option>
                    <option value="Titre">Titre</option>
                    <option value="Date">Date</option>
                </select>
            </form>
        `
        
        this.$tri.innerHTML = inner
        this.onChangeSorter()
    }
    
}

