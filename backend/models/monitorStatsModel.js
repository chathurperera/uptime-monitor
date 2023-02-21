const mongoose = require('mongoose');

const MonitorStatsSchema = new mongoose.Schema({
    lastChecked: {
        type: String
    },
    lastIncident: {
        type: String
    },
    totalIncidents: {
        type: String
    },
})

module.exports = mongoose.model('MonitorStats', MonitorStatsSchema);
