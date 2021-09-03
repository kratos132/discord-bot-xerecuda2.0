const Discord = require('discord.js');
const yts = require('yt-search');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord.Message} msg
 */

 exports.run = (client, msg, args, ops) => {

    yts(args.join(' '), function(err, res)  {
       
      if(err) throw err;

      //let videos = res.videos.slice(0, 10)

      let stream = res.videos[0].url;
      console.log(msg.content);
      console.log(stream);
      
      let commandFile = require('./+tocar');
      commandFile.run(client, msg, stream, ops);
      return;

   });


 }

