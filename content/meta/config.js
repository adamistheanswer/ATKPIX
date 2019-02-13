const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Attacking Pixels", // <title>
  shortSiteTitle: "Adam Robinson", // <title> ending for posts and pages
  siteDescription: "ATKPIXITB",
  siteUrl: "attackingpixels.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Adam Robinson",
  authorTwitterAccount: "attackingpixels",
  // info
  infoTitle: "ATKPIX",
  infoTitleNote: "Adam Robinson",
  // manifest.json
  manifestName: "Attacking Pixels - Adam Robinson",
  manifestShortName: "ATKPIX", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "adam@attackingpixels.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/adamistheanswer" },
    { name: "twitter", url: "https://twitter.com/attackingpixels" },
    { name: "facebook", url: "https://facebook.com/adamistheanswer" },
    { name: "instagram", url: "https://facebook.com/adamistheanswer" }
  ]
};
