const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const History = require("../models/historyModel");

const availabilityCheck = asyncHandler(async (req, res) => {
  console.log("availabilityCheck invoked");
  const sites = await Monitor.find({}).select("url");
  console.log("sites", sites);
  sites?.forEach(async (site) => {
    await axios
      .get(site.url)
      .then(async (res) => {
        await History.create({
          monitorId: site._id,
          statusCode: res.statusCode,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  res.status(200).json(sites);
});

module.exports = { availabilityCheck };
