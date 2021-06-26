const managedRecordsCb = require('./services/managed-records');
const recordsCb = require('./services/records');

module.exports = [
    {
        path: '',
        method: 'get',
        handler: (_, res) => res.json({ status: "ok" })
    },
    {
        path: '/records',
        method: 'get',
        handler: recordsCb
    },
    {
        path: '/managed-records',
        method: 'get',
        handler: managedRecordsCb
    }
]