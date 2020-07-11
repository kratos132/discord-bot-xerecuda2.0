const Discord = require('discord.js');
const ytdl = require('ytdl-core');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 */

 exports.run = async (client, msg, args, ops) =>{

    let connection = await msg.member.voice.channel.join();
    let dispatcher = connection.dispatcher.end();

    
 }