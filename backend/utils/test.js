const sslChecker = require("ssl-checker");

// const getSslDetails = async (domainURL) => {
//   let domain;
//   if (domainURL.includes("https://")) {
//     domain = Str.split("https://").join("");
//   } else if (domainURL.includes("http://")) {
//     domain = Str.split("http://").join("");
//   } else if(domainURL.includes("www.")){

//   }
//   await sslChecker(domain, {
//     method: "GET",
//     port: 443,
//   }).then(console.info);
// };
// getSslDetails();
sslChecker("www.youtube.com", { method: "GET", port: 443 }).then(console.info);
// const url = new URL("https://www.youtube.com/");
// console.log("url", url);
