const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login('NTY0ODk4NDcwMjcyNDM0MTc3.XKulnQ.gNMQkc9uEvXd14HfDgich1TzHlU')

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commands = f.filter(f => f.split(".").pop() === "js")
    if(commands.length <= 0) return console.log("Aucune commande trouvée")

    commands.forEach((f) => {
        let commande = require(`./Commandes/${f}`)

        console.log(`${f} Commande chargée`)

    client.commands.set(command.help.name, commande)
    })
})

fs.readdir('./Events/', (error, f) =>{
    if(error) console.log(error)
    console.log(`${f.length} Event en chargement ...`)


})