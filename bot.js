const Discord = require('discord.js');
const client  = new Discord.Client();

const prefixo = '_';
const token = process.env.TOKEN ||'NzMwNDYxMzY0ODAzNjAwNTAx.XwdhRw.D46F5YYp6exT-t3n1oInN_8J-6c';
ownerID = '729366493682466947'

client.on('message', msg => {

    let ops = {
        
        ownerID: ownerID
    
    };
    let args = msg.content.slice(prefixo.lengh).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(msg.author.bot) return;

    try {
        
        delete require.cache[require.resolve(`./comandos/${cmd}.js`)];

        let cmdFile = require(`./comandos/${cmd}.js`);
        cmdFile.run(client, msg, args, ops);

    } catch (e) {
        
        console.log(e.stack);

    }

});

client.on('ready', () => console.log('o bot foi iniciado com sucesso!'));

client.login(token);