const Discord = require('discord.js');
const client  = new Discord.Client();

const prefixo = '+';
const token = "";
ownerID = '729366493682466947'

client.on('message', msg => {

    let ops = {
        
        ownerID: ownerID
    
    };
    let args = msg.content.slice(prefixo.lengh).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(msg.author.bot) return;
    if(!msg.content.startsWith(prefixo)) return;

    try {
        
        delete require.cache[require.resolve(`./comandos/${cmd}.js`)];

        let cmdFile = require(`./comandos/${cmd}.js`);
        cmdFile.run(client, msg, args, ops);

    } catch (e) {
        
        console.log(e.stack);

    }

});

client.on('ready', () => console.log('o bot foi iniciado com sucesso!'));

<<<<<<< HEAD
client.login("NzMwNDYxMzY0ODAzNjAwNTAx.XwX1KA.WayZRE9eix8bcLzjouw8cBbE9YY");
=======
client.login("");
>>>>>>> a335bbb25e25bd4acad29d6ae4c4b4d3e93a7f12
