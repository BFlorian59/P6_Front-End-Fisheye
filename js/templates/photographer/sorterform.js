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

    // addEventListeners () {
    //     document.querySelectorAll('#listbox-options option').forEach(option => {
    //         option.addEventListener('click', () => {
    //             this.sorterMedias(option.innerHTML)
    //             const currentSort = document.querySelector('.listbox-active-content').innerHTML
    //             document.querySelector('.listbox-active-content').innerHTML = option.innerHTML
    //             option.innerHTML = currentSort
    //         })
    //     })
    //     document.querySelector('#listbox-options').addEventListener('keydown', e => {
    //         const activeEl = document.activeElement
    //         const currentSort = document.querySelector('.listbox-active-content').innerHTML
    //         switch (e.key) {
    //         case 'Enter':
    //             this.sorterMedias(activeEl.innerHTML)
    //             document.querySelector('.listbox-active-content').innerHTML = activeEl.innerHTML
    //             activeEl.innerHTML = currentSort
    //             break
    //         }
    //     })
    // }

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
            <form action="#" method="POST" class="sorter-form" role="filter">
                <label for="sorter-select">Triez par : </label>
                <select name="sorter-select" id="sorter-select">
                    <option role="option" class="listbox-active-content" value="">Aucun filtre</option>              
                    <option id="listbox-options" role="option" value="Popularité">Popularité</option>
                    <option id="listbox-options" role="option" value="Titre">Titre</option>
                    <option id="listbox-options" role="option" value="Date">Date</option>
                </select>
            </form>
        `
        
        this.$tri.innerHTML = inner
        this.onChangeSorter()
        // this.addEventListeners()
    }
    
}

