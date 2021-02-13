module.exports = ({
    name: "welcome",
    aliases: ['testwelcome'],
    code: `
    $getServerVar[kdotwmessage]
$title[$getServerVar[kdotwtitle]]
$thumbnail[$getServerVar[kdotwthumbnail]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[kdotwdescription];{mention};<@$authorID>];{server};
$serverName];{user(proper)};$username[$authorID]#$discriminator[$authorID]];{server(members)};$membersCount];{username};$username]]
$color[00ffff]
$footer[$serverName;$serverIcon]
    
    `
});