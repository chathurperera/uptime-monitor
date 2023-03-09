const Incident = require("../models/incidentModel");
const Monitor = require("../models/monitorModel");
const axios = require("axios");
const sendEmail = require('./sendEmail');
const path = require('path');
const fs = require('fs');

const testUrl = async (monitor) => {
  await axios.get(monitor.url).catch(async (error) => {

    //Checks if an incident is already created
    const existingIncident = await Incident.findOne({ monitorId: monitor._id });
    console.log('existingIncident', existingIncident);

    //Creates an incident
    if (!existingIncident) {
      await createAnIncident(monitor._id, monitor.user, error.response.status);
      await sendIncidentAlert(
        monitor._id,
        monitor?.url,
        error.response.status,
        monitor.alertEmails
      );
    }
  });
};

//Creates an incident
const createAnIncident = async (monitorId, userId, statusCode) => {
  //Creates an incident
  await Incident.create({
    monitor: monitorId,
    user: userId,
    cause: `Status ${statusCode}`,
  });

  //Updates the monitor availability
  await Monitor.updateOne({ _id: monitorId }, { availability: false, lastIncidentAt: Date.now() });

};

//Send email alerts for given assignees
const sendIncidentAlert = async (
  monitorID,
  monitorURL,
  statusCode,
  alertEmails
) => {
  const currentDate = new Date().toJSON().slice(0, 10);


  const filePath = path.join(__dirname, '../views/incident.html');
  const source = fs.readFileSync(filePath, 'utf-8').toString();

  //Setting up data for the email template
  const dynamicData = {
    monitorID: monitorID,
    // recipientName:"",
    monitorURL: monitorURL,
    statusCode: statusCode,
    createdAt: currentDate
  };
  const subject = 'Incident Alert!'

  //Sending email alerts to all the assigned members
  for (const email of alertEmails) {
    sendEmail(email, source, dynamicData, subject);
  }
};

module.exports = testUrl;
