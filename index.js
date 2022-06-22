require("dotenv").config();

const {
    Collection,
    Client
} = require("discord.js");


const client = new Client({
    allowedMentions: {
        repliedUser: true,
        parse: ["users", "roles", "everyone"]
    },
    intents: 513, 
});
module.exports = client; 

// Global Variables
client.commands = new Collection();
client.aliases = new Collection();
client.SlashCommands = new Collection();

// Requiring The Handler
require('./Handler/handler')(client);

client.login(process.env.TOKEN); 


