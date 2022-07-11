class Formcontact{
  constructor(photographer){
    this.photographer = photographer;
    this.$formcontact = document.querySelector('#form-modal');
    this.$contactez = document.querySelector('.contact');
  }

  // afficher le formulaire
  display () {
    const main = document.querySelector('.main-wrapper');
    main.setAttribute('aria-hidden', 'true');
    main.style.opacity = '0.5';
    this.$formcontact.setAttribute('aria-hidden', 'false');
    this.$formcontact.style.display = 'flex';
    document.querySelector('#close').focus();
  }

  //faire disparaitre le formulaire
  none () {
    const main = document.querySelector('.main-wrapper');
    main.setAttribute('aria-hidden', 'false');
    main.style.opacity = '1';
    document.querySelector('body').classList.remove('no-scroll');
    this.$formcontact.setAttribute('aria-hidden', 'true');
    this.$formcontact.style.display = 'none';
    this.$contactez.focus();
  }

  // fermer la modal
  onCloseButton () {
    document.querySelector('.cross').addEventListener('click', () => {
      this.none();
    });
  }

  // fermer la modal avec le bouton echap
  echap(){
    // Close modal when escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.none();
        }
    });
}

  // la validation sur le formulaire
  onSubmit () {

    var verifiation = false;
    const firstName  = document.getElementById ('fprenom');
    const lastName  = document.getElementById ('fnom');
    const eMail  = document.getElementById ('fmail');
    const msg = document.getElementById ('msg');

    const veriffirst  = document.getElementById ('verifprenom');
    const veriflast  = document.getElementById ('verifnom');
    const verifemail  = document.getElementById ('verifmail');
    const verifmsg  = document.getElementById ('verifmsg');

    form.addEventListener("submit", msgvalidate);
    firstName.onblur = validate;
    lastName.onblur = validate;
    eMail.onblur = validate;
    msg.onblur = validate;
    // fonction de la validation des champs du formulaire
    function validate () {
          
      if (firstName.value !== null && firstName.value.length < 2) {
        veriffirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        firstName.style.borderColor = "red";
        firstName.style.borderWidth = "2px";
        return verifiation = false;
      } 
      else{
        firstName.style.border= "none";
        veriffirst.style.display = "none";
      };
          
          
      if (lastName.value !== null && lastName.value.length < 2) { 
        veriflast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
        lastName.style.borderColor = "red";
        lastName.style.borderWidth = "2px";
        return verifiation = false;
      }
      else
      {
        lastName.style.border= "none";
        veriflast.style.display = "none";
      };
          
          
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
        verifemail.innerHTML = "Veuillez remplir le champ email";
        eMail.style.borderColor = "red";
        eMail.style.borderWidth = "2px";
        return verifiation = false;
      }
      else
      {
        eMail.style.border= "none";
        verifemail.style.display = "none";
      };
          
          
      if(!msg.value) {
        verifmsg.innerHTML = "Veuillez entrer un message";
        msg.style.borderColor = "red";
        msg.style.borderWidth = "2px";
        return verifiation = false;
      } 
      else
      {
        msg.style.border= "none";
        verifmsg.style.display = "none";
      };       
      return verifiation = true;
    } 
          
    // fonction qui permet l'affichage de la confirmation 
    function msgvalidate(submit){
          
      // évite le comportement par défaut du bouton submit
      submit.preventDefault();
      // run la fonction validate 
      validate();
      // si la condition est vraie alors elle affiche le message
      if(verifiation === true) {
        document.querySelectorAll('.iform').forEach((x) => {
          console.log(x.getAttribute('name') + ' : ' + x.value);
          x.value = '';
        });
        const main = document.querySelector('.main-wrapper');
        main.setAttribute('aria-hidden', 'false');
        main.style.opacity = '1';
        document.querySelector('body').classList.remove('no-scroll');
        document.querySelector('#form-modal').setAttribute('aria-hidden', 'true');
        document.querySelector('#form-modal').style.display = 'none';
        document.querySelector('.contact').focus();
        return true;
      }
    }
  }

  // afficher le formulaire dans le html
  form(){
    this.$formcontact.setAttribute('aria-hidden', true);
    this.$formcontact.setAttribute('role', 'dialog');
    this.$formcontact.setAttribute('aria-labelledby', 'formModalTitle');
    // const info = new Photographer_card(this.photographer)
    // info.createphotographer()
    const formhtml = `
    <button aria-label="fermer" id="close" class="cross cross--white"></button>
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
        <label for="fmail">E-mail&nbsp;:</label>
        <input type="email" class="iform" name="fmail" id="fmail" >
        <span id="verifmail"></span>
      </div>
      <div>
        <label for="msg">Votre message</label><br>
        <textarea class="iform" id="msg" name="msg" ></textarea>
        <span id="verifmsg"></span>
      </div>
      <input aria-label="envoyer" type="submit" value"Envoyer"></input>
    </form>`;
        
    this.$formcontact.innerHTML = formhtml;
    this.onCloseButton();
    this.onSubmit();
    this.echap();
  }
}



