const Incident = require("../models/incidentModel");

const createNewIncident = async ({ monitor, user, cause }) => {
  await Incident.create({ monitor, user, cause });
};

module.exports = createNewIncident;
