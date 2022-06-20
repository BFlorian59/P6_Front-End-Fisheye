class Formcontact{
    constructor(photographer){
        this.photographer = photographer
        this.$formcontact = document.querySelector('#form-modal')
        this.$contactez = document.querySelector('.contact')
    }

    display () {
        this.$formcontact.style.display = 'flex'
    }

    none () {
        this.$formcontact.style.display = 'none'
    }

    onCloseButton () {
        document.querySelector('.cross').addEventListener('click', () => {
            this.none()
        })
    }

    form(){
        // const info = new Photographer_card(this.photographer)
        // info.createphotographer()
        const formhtml = `
        <button class="cross cross--white"></button>
        <div>
            <h2>Contactez moi ${this.photographer.name}</h2>
        </div>
        <form>
            <div>
                <label>Prénom :</label>
                <input type="text" id="fprenom" >
            </div>
            <div>
                <label>Nom :</label>
                <input type="text" id="fnom" >
            </div>
            <div>
                <label>e-mail&nbsp;:</label>
                <input type="email" id="fmail" >
            </div>
            <div>
                <label>Message :</label>
                <textarea id="msg" ></textarea>
            </div>
            <input
                class="btn-submit"
                type="submit"
                class="button"
                value="Envoyez"
              />
        </form>

        `
        
        this.$formcontact.innerHTML = formhtml
        this.onCloseButton()
    }

    
}



