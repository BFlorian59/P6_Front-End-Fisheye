function photographerFactory(data) {
    const { name, id, city , country , tagline , price, portrait } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {

        //modification url
        let url = new URL(window.location);

        let params = new URLSearchParams(url.search.slice(1));
    
        params.set('id', id);
        console.log(params.has('id'));
    
        params.append('name', name);
        console.log(params.getAll('name'));
    
        console.log(params.toString());

        const article = document.createElement( 'article' );
        const lien = document.createElement('a'); 
        lien.setAttribute("href", params.toString() )

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("id", "image")
        img.setAttribute("alt", "image du photographe")

        const h2 = document.createElement( 'h2' );
        h2.setAttribute("id", "name");
        h2.textContent = name;

        const ville =document.createElement('b');
        ville.setAttribute("id", "city");
        ville.textContent = city;

        const tag =document.createElement('b');
        tag.setAttribute("id", "tag");
        tag.textContent = tagline;

        const prix =document.createElement('b');
        tag.setAttribute("id", "price");
        prix.textContent = price+ "€/jour";

        lien.appendChild(img);
        lien.appendChild(h2);

        article.appendChild(lien);
        article.appendChild(ville);
        article.appendChild(tag);
        article.appendChild(prix);

        return (article);
    }
    return { name, id, city , country , tagline , price, portrait, getUserCardDOM }
}