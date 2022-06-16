class Formcontact{
    constructor(photographer){
        this.photographer = photographer
        this.$formcontact = document.querySelector('#form-modal')
        this.$contactez = document.querySelector('.contact')
    }

    display () {
        const modal = document.querySelector('#form-modal')
        modal.style.display = 'flex'
        document.querySelector('#form-modal button').focus()
    }


    
    // closeModal() {
    //     const modal = document.getElementById("contact_modal");
    //     modal.style.display = "none";
    // }

    form(){
        const formhtml = `
        <form action="#" method="post">
            <button class="cross cross--white"></button>
            <div>
                <h2>Contactez moi ${this.photographer.name}</h2>
            </div>
            <div>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom">
            </div>
            <div>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom">
            </div>
            <div>
                <label for="mail">e-mail&nbsp;:</label>
                <input type="email" id="mail" name="mail">
            </div>
            <div>
                <label for="msg">Message :</label>
                <textarea id="msg" name="msg"></textarea>
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
    }

    
}



