const mongoose = require("mongoose");
const { Schema } = mongoose;

const MonitorSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    incidentCount: {
      type: Number,
      default: 0,
    },
    lastIncidentAt: {
      type: String,
      default: Date.now(),
    },
    alertEmails: {
      type: Array,
    },
    alertsTriggeredOn: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

//Indexes
MonitorSchema.index({ active: 1, user: 1 });
module.exports = mongoose.model("Monitor", MonitorSchema);
/*
Alert triggers
1 = Becomes unavailable 
2 = SSL Expires
3 = Doesn't contain a keyword
*/
