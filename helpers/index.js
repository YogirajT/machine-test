const env = require("../env");

module.exports = {
    calculateStats: (o, ids, closedCount, open) => {
        if (o) {
            if (o.id)
                ids.push(o.id);
            if (o.disposition === "closed"
                && o.color
                && (o.color.toLowerCase() === "blue"
                    || o.color.toLowerCase() === "red"
                    || o.color.toLowerCase() === "yellow")) {
                closedCount += 1;
            }
            if (o.disposition === "open")
                open.push(Object.assign({}, o));
        }
        return closedCount;
    },
    getPagination: (pageNo, data) => {
        const itemsPerPage = env.itemsPerPage;
        const numberOfPages = Math.ceil(data.length / itemsPerPage) - 1;
        let currentPage = Math.max(0, pageNo);
        currentPage = Math.min(currentPage, numberOfPages);
        const offset = currentPage * itemsPerPage;
        const pageItems = data.slice(offset, offset + itemsPerPage);
        const previousPage = currentPage - 1 < 0 ? null : currentPage - 1;
        const nextPage = currentPage + 1 > numberOfPages ? null : currentPage + 1;
        return { pageItems, currentPage, numberOfPages, previousPage, nextPage };
    }
}