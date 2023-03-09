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
    type: {
      type: String,
      enum: ["HTTP", "SSL", "KEYWORD"],
      default: "HTTP",
    },
    active: {
      type: Boolean,
      default: true,
    },
    keyword: String,
    availability: {
      type: Boolean,
      default: true,
    },
    sslDetails: {
      issuer: String,
      validFrom: String,
      validTo: String,
      protocol: String,
      notifyExpiration: String,
    },
    incidentDetails: {
      incidentCount: {
        type: Number,
        default: 0,
      },
      lastIncidentAt: {
        type: String,
        default: Date.now(),
      },
    },
    alertEmails: [String],
  },
  {
    toJSON: true,
    toObject: true,
    timestamps: true,
  }
);

//Indexes
MonitorSchema.index({ active: 1, user: 1 });

//Virtual
MonitorSchema.virtual("incidents", {
  ref: "Incident",
  localField: "_id",
  foreignField: "monitor",
});

module.exports = mongoose.model("Monitor", MonitorSchema);
