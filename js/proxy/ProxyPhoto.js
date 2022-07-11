class ProxyPhoto{
    constructor() {
        this.cache = [];
    }

    //stocker dans le cache les médias + instancier la class Sorterphoto
    sorter(medias, orderBy) {
        const cachedResult = this.cache.find(elt => elt.key === orderBy);
        if (cachedResult) {

            return cachedResult;
        }

        const data = Sorterphoto.sorter(medias, orderBy);

        this.cache.push(data);
        return data;
    }
}