class Sorterform{
    constructor (medias) {
        this.medias = medias;
        this.ProxyPhoto = new ProxyPhoto();
        this.$tri = document.querySelector("#listbox-wrapper");
        this.$mediaWrapper = document.querySelector("#gallery");
    }

    async sorterMedias (order) {
        this.clearMoviesWrapper();

         if (!!order) {
            const sortedData = await this.ProxyPhoto.sorter(this.medias, order);
             const SortedMedia = sortedData.data; 

            SortedMedia.forEach(Media => {
                const Template = new Media_Card(Media);
                this.$mediaWrapper.appendChild(Template.createmedia());
            });
        } else {
            this.medias.forEach(Media => {
                const Template = new Media_Card(Media);
                this.$mediaWrapper.appendChild(Template.createmedia());
            });
        }
    }
    addEventListeners () {
        const listboxOptions = document.querySelector("#listbox-options");
        document.querySelector("#listbox-active").addEventListener("click", () => {
            if (!listboxOptions.getAttribute("style") || listboxOptions.style.display === "none") {
                document.querySelector("#listbox-active").setAttribute("aria-expanded", true);
                listboxOptions.style.display = "block";
                document.querySelector(".arrow--up").style.display = "block";
                document.querySelector(".arrow--down").style.display = "none";
            } else {
                listboxOptions.style.display = "none";
                document.querySelector("#listbox-active").setAttribute("aria-expanded", false);
                document.querySelector(".arrow--up").style.display = "none";
                document.querySelector(".arrow--down").style.display = "block";
            }
        });
        document.querySelectorAll("#listbox-options div").forEach(option => {
            option.addEventListener("click", () => {
                this.sorterMedias(option.innerHTML);
                const currentSort = document.querySelector(".listbox-active-content").innerHTML;
                document.querySelector(".listbox-active-content").innerHTML = option.innerHTML;
                option.innerHTML = currentSort;
            });
        });
        document.querySelector("#listbox-options").addEventListener("keydown", e => {
            const activeEl = document.activeElement;
            const currentSort = document.querySelector(".listbox-active-content").innerHTML;
            switch (e.key) {
            case "Enter":
                this.sorterMedias(activeEl.innerHTML);
                document.querySelector(".listbox-active-content").innerHTML = activeEl.innerHTML;
                activeEl.innerHTML = currentSort;
                break;
            }
        });
    }

    clearMoviesWrapper() {
        this.$mediaWrapper.innerHTML = "";
    }


    render () {
        const inner = `
        <label id="listbox-label">Trier par</label>
        <div role="listbox" id="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-active">
            <button id="listbox-active" aria-selected="true" aria-haspopup="listbox" aria-expanded="false">
            <div class="arrow arrow--up"></div>
            <div class="arrow arrow--down"></div>
                <div class="listbox-active-content">Popularité</div>
            </button>
            <div id="listbox-options">
                <div role="option" aria-selected="false" class="option" tabindex="0">Titre</div>
                <div role="option" aria-selected="false" class="option" tabindex="0">Date</div>
            </div>
        </div>
        `;
        
        this.$tri.innerHTML = inner;
        this.addEventListeners();
    }
    
}

