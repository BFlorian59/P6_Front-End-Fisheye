class ProxyPhoto{
    constructor() {
        this.cache = [];
    }

    sorter(medias, orderBy) {
        const cachedResult = this.cache.find(elt => elt.key === orderBy)
        if (cachedResult) {
            console.log("get from cache")

            return cachedResult;
        }

        const data = Sorterphoto.sorter(medias, orderBy);

        this.cache.push(data);
        return data;
    }
}