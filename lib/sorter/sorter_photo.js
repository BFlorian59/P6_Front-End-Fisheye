class Sorterphoto{
    static sorter (medias, orderBy) {
        if (orderBy === "Popularité") {
            // Sort from more popular to less
            const result = {
                key: orderBy,
                data: Array.from(medias).sort((a, b) => b.likes - a.likes)
            };
            return result;
        }
        if (orderBy === "Date") {
            // Sort from oldest to newest
            const result = {
                key: orderBy,
                data: Array.from(medias).sort((a, b) => (a.date > b.date ? 1 : -1))
            };
            return result;
        }
        if (orderBy === "Titre") {
            // Sort from a to z
            const result = {
                key: orderBy,
                data: Array.from(medias).sort((a, b) => (a.title > b.title ? 1 : -1))
            };
            return result;
        }
    }
}