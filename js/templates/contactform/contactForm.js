class Formcontact{
    constructor(photographer, verifiation){
        this.photographer = photographer
        this.$formcontact = document.querySelector('#form-modal')
        this.$contactez = document.querySelector('.contact')
        this.verifiation = verifiation
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

    // validate () {
    //     this.verifiation = false;
    //     const firstName  = document.getElementById ('fprenom');
    //     const lastName  = document.getElementById ('fnom');
    //     const eMail  = document.getElementById ('fmail');
    //     const msg = document.getElementById ('msg');

    //     const veriffirst  = document.getElementById ('verifprenom');
    //     const veriflast  = document.getElementById ('verifnom');
    //     const verifemail  = document.getElementById ('verifmail');
    //     const verifbirthdate  = document.getElementById ('verifmsg');

    //     if (firstName.value !== null && firstName.value.length < 2) {
    //       veriffirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    //       firstName.style.borderColor = "red";
    //       firstName.style.borderWidth = "2px";
    //       return this.verifiation = false;
    //     } 
    //     else{
    //       firstName.style.border= "none";
    //       veriffirst.style.display = "none";
    //     };
      
      
    //     if (lastName.value !== null && lastName.value.length < 2) { 
    //       veriflast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    //       lastName.style.borderColor = "red";
    //       lastName.style.borderWidth = "2px";
    //       return this.verifiation = false;
    //     }
    //     else
    //     {
    //       lastName.style.border= "none";
    //       veriflast.style.display = "none";
    //     };
      
      
    //     if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    //       verifemail.innerHTML = "Veuillez remplir le champ email";
    //       eMail.style.borderColor = "red";
    //       eMail.style.borderWidth = "2px";
    //       return this.verifiation = false;
    //     }
    //     else
    //     {
    //       eMail.style.border= "none";
    //       verifemail.style.display = "none"; 
    //     };
      
      
    //     if(!msg.value) {
    //       verifbirthdate.innerHTML = "Veuillez entrer votre date de naissance";
    //       msg.style.borderColor = "red";
    //       msg.style.borderWidth = "2px";
    //       return this.verifiation = false;
    //     } 
    //     else
    //     {
    //         msg.style.border= "none";
    //       verifbirthdate.style.display = "none"; 
    //     };
        
    //     return this.verifiation = true;
    //   }

      onSubmit () {
            document.querySelector('#form').addEventListener('submit', e => {
                e.preventDefault()
                document.querySelectorAll('.iform').forEach((x) => {
                    console.log(x.getAttribute('name') + ' : ' + x.value)
                    x.value = ''
                })
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
        <form id="form">
            <div>
                <label for="fprenom">Prénom</label><br>
                <input type="text" class="iform" name="fprenom" id="fprenom" >
                <span id="verifprenom"></span>
            </div>
            <div>
                <label for="fnom">Nom</label><br>
                <input type="text" class="iform" name="fnom" id="fnom" >
                <span id="verifnom"></span>
            </div>
            <div>
                <label for="fmail">e-mail&nbsp;:</label>
                <input type="email" class="iform" name="fmail" id="fmail" >
                <span id="verifmail"></span>
            </div>
            <div>
                <label for="msg">Votre message</label><br>
                <textarea class="iform" id="msg" name="msg" ></textarea>
                <span id="verifmsg"></span>
            </div>
            <input type="submit" value"Envoyer"></input>
        </form>

        `
        
        this.$formcontact.innerHTML = formhtml
        this.onCloseButton()
        this.onSubmit()
    }

    
}



