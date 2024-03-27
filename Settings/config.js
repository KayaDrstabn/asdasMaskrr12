module.exports = {

  token: process.env.token,

  authDevelopers: ['1051175037274705930', '1103923335265525770'], // developers
  authOwners: ['1051175037274705930'], // whitelist

  webhook: {
    name: 'yo',
    avatar: 'https://cdn.discordapp.com/attachments/1115128110824833057/1115128605102575687/gen0cide.jpeg',
    url: "https://discord.com/api/webhooks/1221570887669776541/mtua6y3DuPt8jdTO_zsk2tDhp15JTbPVb7XQhOWa8QQoNmkeynTxh09GNAJw_rEOuX1v",
  },

  client: {
    id: "1212482113170046977",
    secret: "JqYR1cTHQWoY_fG2fdyV22HpjplAyBzA",
    redirect_uri: "https://restorecord.com/api/callback",
    scope: ['identify', 'guilds.join'],
    footer: "v4.0", // footer
    serverLink: "https://discord.gg/", // server
  },

  web: {
    port: 319,
    apiKey: "6wohla1fpz766aew"
  },

  database: {

    URI: process.env.mongo,

  }

}
