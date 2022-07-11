class Api {
    constructor (url) {
        this.url = url;
    }

    // récupérer la base de donnée
    async getPhotographer () {
        return fetch(this.url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Work with JSON data here
    
            return data;
        })
        .catch((err) => {
            // Do something for an error here
        });
    }
}