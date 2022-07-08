async function index () {
    const api = new Api("data/photographers.json");
    const data = await api.getPhotographer();

    const $main = document.querySelector("main");

    //Création d'une card pour chaque photographe
    data.photographers.forEach((photographer) => {
        const pCard = new Photographer_card(photographer);
        const pCardElement = pCard.createphotographer();

        $main.appendChild(pCardElement);
    });
}index();