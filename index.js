constant Discord = require(discord.js)
const client = new Discord.client()

let prefix = '!'

client.login('NjA5MTE0ODIyMjY4ODEzMzY1.XUyAgw.F2PmIcdina9tMwgal5JvpLwDVTw')

client.on('ready', () => {
    console.log('Connecté !')
})