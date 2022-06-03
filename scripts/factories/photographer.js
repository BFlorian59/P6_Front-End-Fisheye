function photographerFactory(data) {
    const { name, id, city , country , tagline , price, portrait } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const ville =document.createElement('b');
        ville.textContent = city;
        const tag =document.createElement('b');
        tag.textContent = tagline;
        const prix =document.createElement('b');
        prix.textContent = price+ "€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(tag);
        article.appendChild(prix);
        return (article);
    }
    return { name, id, city , country , tagline , price, portrait, getUserCardDOM }
}