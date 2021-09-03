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

      let videos = res.videos.slice(0, 10)

      let resp = '';
      for(var i in videos){

         resp += `**[${parseInt(i) +1}]** - ${videos[i].title} \r\n`;

      }

         msg.channel.send(resp);
         

      const filter = m => !isNaN(m.content) && m.content < videos.length && m.content > 0;
      const collector = msg.channel.createMessageCollector(filter);

      console.log('yes');
      
      collector.videos = videos;

      collector.once('collect', function(m){
         
         let commandFile = require('./+tocar.js');
         commandFile.run(client, msg, [this.videos[parseInt(m.content)-1].url], ops);

      });

   })


 }

