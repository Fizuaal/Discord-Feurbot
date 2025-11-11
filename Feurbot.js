const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// Fonction pour choisir une réponse aléatoire dans un tableau
function randomReply(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
}

// Structure de données pour les réponses automatiques
// Le $ dans les regex assure qu'on vérifie bien la fin du message
// reply peut être une chaîne ou un tableau de réponses possibles
// \s*\?{0,6} permet de gérer de 0 à 6 points d'interrogation
const responses = [
  { pattern: /(quoi|kois?|q(u)?wa)\s*\?{0,6}$/i, reply: ['Feur', 'Coubeh'] },
  { pattern: /qui\s*\?{0,6}$/i, reply: 'quette' },
  { pattern: /comment\s*\?{0,6}$/i, reply: 'DanCousteau' },
  { pattern: /oui\s*\?{0,6}$/i, reply: 'Fi' },
  { pattern: /non\s*\?{0,6}$/i, reply: 'Bril' },
  { pattern: /de\s*\?{0,6}$/i, reply: 'ans d\'études à Montpellier' },
  { pattern: /qué\s*\?{0,6}$/i, reply: 'so' }
];

client.once('clientReady', function () {
  console.log("Je suis connecté !")
})

client.on('messageCreate', message => {
  // Parcourir toutes les réponses configurées
  for (const { pattern, reply } of responses) {
    if (pattern.test(message.content)) {
      // Si reply est un tableau, choisir aléatoirement
      const response = Array.isArray(reply) ? randomReply(reply) : reply;
      message.reply(response);
      break; // Arrêter après la première correspondance
    }
  }
});


client.login(process.env.DISCORD_TOKEN);
