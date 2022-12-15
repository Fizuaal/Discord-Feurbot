
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})



client.on('ready', function () {
  console.log("Je suis connecté !")
})



client.on('messageCreate', message =>{
  // KOIS
  if (message.content.endsWith('quoi ?') || message.content.endsWith('Quoi ?') || message.content.endsWith('Koi ?') || message.content.endsWith('Kois ?') || message.content.endsWith('kois ?') || message.content.endsWith('KOIS ?') || message.content.endsWith('koi ?')|| message.content.endsWith('KOI ?')) {
    message.reply('Feur');
  }
  if (message.content.endsWith('quoi') || message.content.endsWith('Quoi') || message.content.endsWith('Koi') || message.content.endsWith('Kois') || message.content.endsWith('kois') || message.content.endsWith('KOIS') || message.content.endsWith('koi')|| message.content.endsWith('KOI')) {
    message.reply('Feur');
  }
  if (message.content.endsWith('Qwa ?') || message.content.endsWith('qwa ?') || message.content.endsWith('QWA ?') || message.content.endsWith('Qwa') || message.content.endsWith('qwa') || message.content.endsWith('QWA')) {
    message.reply('Feur');
  }
  if (message.content.endsWith('Quwa ?') || message.content.endsWith('quwa ?') || message.content.endsWith('QUWA ?') || message.content.endsWith('Quwa') || message.content.endsWith('quwa') || message.content.endsWith('QUWA')) {
    message.reply('Feur');
  }
  if (message.content.endsWith('Kwa ?') || message.content.endsWith('kwa ?') || message.content.endsWith('KWA ?') || message.content.endsWith('Kwa') || message.content.endsWith('kwa') || message.content.endsWith('KWA')) {
    message.reply('Feur');
  }
  // Comment ?
  if (message.content.endsWith('Comment ?') || message.content.endsWith('comment ?') || message.content.endsWith('COMMENT ?') || message.content.endsWith('Comment') || message.content.endsWith('comment') || message.content.endsWith('COMMENT')) {
    message.reply('DanCousteau');
  }
  if (message.content.endsWith('Oui') || message.content.endsWith('oui') || message.content.endsWith('OUI')) {
    message.reply('Fi');
  }
  if (message.content.endsWith('Non') || message.content.endsWith('non') || message.content.endsWith('NON')) {
    message.reply('Bril');
  }
  if (message.content.endsWith('De ?') || message.content.endsWith('de ?') || message.content.endsWith('DE ?')) {
    message.reply('ans d\'études à Montpellier');
  }
  if (message.content.endsWith('Qué ?') || message.content.endsWith('qué ?') || message.content.endsWith('Qué') || message.content.endsWith('qué')) {
    message.reply('so');
  }
});


client.login('TOKEN');
