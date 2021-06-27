const env = require('../env')
const fetch = require('node-fetch');
const { calculateStats, getPagination } = require('../helpers');
const RecordResponse = require('../models/Record');

module.exports = async (req, res) => {
    try {
        const result = await fetch(`${env.host}:${env.port || ''}/records`)
        const data = await result.json();
        const pageNo = req?.query?.page || 0;
        const { pageItems, numberOfPages, previousPage, nextPage } = getPagination(pageNo, data);
        const ids = [];
        const open = [];
        let closedCount = 0;
        if (pageItems.length) pageItems.forEach((o) => { closedCount = calculateStats(o, ids, closedCount, open) });
        return res.send(new RecordResponse({ ids, open, closedCount, previousPage, nextPage, numberOfPages }));
    } catch (error) {
        return res.send({ error: `${error}` });
    }
}