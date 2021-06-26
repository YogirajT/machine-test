module.exports = class RecordResponse {
    constructor({ 
        ids = [],
        open = [],
        closedCount = 0,
        previousPage = null,
        nextPage = null,
        numberOfPages = 0 
    } = {}) {
        this.ids = ids;
        this.open = open;
        this.closedCount = closedCount;
        this.previousPage = previousPage;
        this.nextPage = nextPage;
        this.numberOfPages = numberOfPages;
    }
}