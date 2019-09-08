const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Hi,There!');}
    if (msg.content === 'wassup') {
        msg.reply('Good,and you!'); }
        if (msg.content === 'can u be my girlfriend') {
            msg.reply('Sorry,icant because iam bot');}
            if (msg.content === 'how can ibe admin') {
                    msg.reply('Ask@jakeclone1#0001 or @zakeclone#2152');}
                    if (msg.content === 'where is everyone') {
                        msg.reply('Ithink they are sleeping or they are invisable');}
                        if (msg.content === 'who is the owner') {
                            msg.reply('the owner is @zakeclone#2152');}
                            if (msg.content === 'can someone help me') {
                                msg.reply('Go to #ticket_channel and open ticket and the staff team will help you!');}
                                if (msg.content === 'oof') {
                                    msg.reply('oof');}
                                    if (msg.content === 'hmm') {
                                        msg.reply('hMmM');}
                                        if (msg.content === 'hello') {
                                            msg.reply('Hello,there!');}
                                            if (msg.content === 'ilove u') {
                                                msg.reply('but idident.');}
                                                if (msg.content === 'can u show me how to die?') {
                                                    msg.reply('Yes,Go and stab yourself with the knife^_^');}
                                                    if (msg.content === 'lol') {
                                                        msg.reply('Its sound like laugh');}
                                                        if (msg.content === 'yes') {
                                                            msg.reply('Ok!');}
                                                            if (msg.content === 'yep') {
                                                                msg.reply('Ok!');}
                                                                if (msg.content === 'yeah') {
                                                                    msg.reply('Ok!');}
                                                                    if (msg.content === 'yea') {
                                                                        msg.reply('Ok!');}
                                                                        if (msg.content === 'nice') {
                                                                            msg.reply('uwu');}
                                                                            if (msg.content === 'lmao') {
                                                                                msg.reply('lol!');}
                                                                                if (msg.content === ':v') {
                                                                                    msg.reply(':v');}
                                                                                    if (msg.content === 'why but imade you') {
                                                                                        msg.reply('Ok,sorry!');}
                                                                                        if (msg.content === 'lol istill working on it') {
                                                                                            msg.reply('Yes,make me better please');}
                                                                                            if (msg.content === 'ofc') {
                                                                                                msg.reply('Thank you!');}
                                                                                                if (msg.content === 'dont call me a noob') {
                                                                                                    msg.reply('idident **cry**');}
                                                                                                    if (msg.content === 'pro or noob') {
                                                                                                        msg.reply('noob!');}
                                                                                                        if (msg.content === 'ok?') {
                                                                                                            msg.reply('Ok!');}
                                                                                                            if (msg.content === '...') {
                                                                                                                msg.reply('...');}
                                                                                                                if (msg.content === 'how are u') {
                                                                                                                    msg.reply('Good,and you?');}
                                                                                                                    if (msg.content === 'right?') {
                                                                                                                        msg.reply('Yes!');}
                                                                                                                        if (msg.content === 'yay') {
                                                                                                                            msg.reply('yay');}
                                                                                                                            if (msg.content === 'ok') {
                                                                                                                              msg.reply('ok');}
                                                                                                                              if (msg.content === 'invisable?') {
                                                                                                                                msg.reply('yes');}
                                                                                                                                if (msg.content === 'like who?') {
                                                                                                                                  msg.reply('@Hilimart#2793');}
                                                                                                                                  if (msg.content === 'how can ibe developer?') {
                                                                                                                                    msg.reply('ask @DevKamikaze🛠#9492');}

});
client.login('NTU1NzA0NjA4OTYyMzc5Nzc3.XVMPRQ.tI1wePjh7gyyADZMy6TsvnO95QU');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('wassup', () => {
  console.log('Good,and u?');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '💬main-chat💬');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('?pg kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });

  
  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('?pg ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });
  

  client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
      const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('purple galaxy')
        // Set the color of the embed
        .setColor(0xFF0000)
        // Set the main content of the embed
        .setDescription('wassup!');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

