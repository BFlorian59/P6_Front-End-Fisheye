async function init () {
    const api = new Api('data/photographers.json')
    // Get data from the json file
    const data = await api.getPhotographer()

    const $main = document.querySelector('main')

    // For each photographer object, create a "phtographer element" and add it to the photographers-gallery section
    data.photographers.forEach((photographer) => {
        const pCard = new Photographer_card(photographer)
        const pCardElement = pCard.createphotographer()

        $main.appendChild(pCardElement)
    })
}

init()