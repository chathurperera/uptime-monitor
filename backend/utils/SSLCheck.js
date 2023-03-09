const sslChecker = require("ssl-checker");
const sendEmail = require("./sendEmail");

const SSLCheck = async (url, notifyExpiration, user) => {
  let domain;
  if (url.includes("https://")) {
    domain = Str.split("https://").join("");
  } else if (url.includes("http://")) {
    domain = Str.split("http://").join("");
  } else if (url.includes("www.")) {
    domain = Str.split("www.").join("");
  }
  const details = await sslChecker(domain, {
    method: "GET",
    port: 443,
  });

  if (details.daysRemaining < +notifyExpiration) {
    //send email saying that SSL about to expire
    await sendEmail();
  }

  if (!details.valid) {
    //send email to inform SSL is invalid
    await sendEmail();
  }

  return details;
};

module.exports = SSLCheck;
