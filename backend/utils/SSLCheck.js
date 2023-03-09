const sslChecker = require("ssl-checker");

const SSLCheck = async (url) => {
  let domain;
  if (domainURL.includes("https://")) {
    domain = Str.split("https://").join("");
  } else if (domainURL.includes("http://")) {
    domain = Str.split("http://").join("");
  } else if (domainURL.includes("www.")) {
    domain = Str.split("www.").join("");
  }
  const details = await sslChecker(domain, {
    method: "GET",
    port: 443,
  });

  return details;
};

module.exports = SSLCheck;
