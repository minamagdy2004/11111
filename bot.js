const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => {
  if (message.content.startsWith('شين بن نو جتسو مهرجان ليلي يا ليلي')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=R7WRNM9vxzs", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end'());

      });
  }
})


client.login('NDI2MTI4ODg0MjIwNTU5Mzgx.DZRf6A.Ulrx86vZw7ogVxvZSDB2UD3x3Gc');
