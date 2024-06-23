const { Client } = require('discord.js-selfbot-v13');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const client = new Client();
const args = process.argv.slice(2);
const guildId = args[0];

client.on('ready', async () => {
    try{
    console.log(`Logged in as ${client.user.username}!`);
    const guild = await client.guilds.fetch(guildId);
    const members = await guild.members.fetch();

   const csvWriter = createCsvWriter({
    path: path.join(__dirname, 'members.csv'),
    header: [
        { id: 'username', title: 'Username' },
        { id: "globalName", title: 'Globalname'},
        { id: 'joinDate', title: 'Join Date' },
        { id: 'createdAt', title: 'Account Created At' }
    ]
});

const records = members.map(member => {
    const user = member.user;
    const joinDate = member.joinedAt ? member.joinedAt.toISOString().split('T')[0] : 'N/A';
    const createdAt = user.createdAt ? user.createdAt.toISOString().split('T')[0] : 'N/A';
    

    return {
        username: user.username,
        globalName: user.globalName,
        joinDate: joinDate,
        createdAt: createdAt
    };
});

await csvWriter.writeRecords(records);

}   catch(error){
    console.error("error ", error);
}
    client.destroy();
})
const token = args[1];
client.login(token);