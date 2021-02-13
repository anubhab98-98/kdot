const dbd = require('dbd.js');

const bot = new dbd.Bot({
	token: `NzkxMzUyNjE3OTY3NTUwNDc0.X-N6jg.TENxHxoTgMblFaPGDW8OAHHtK_M`,
	prefix: ["k.","<@791352617967550474>","K.","$getServerVar[loduprefix]"]
});

bot.onMessage();

//commands

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
} 
}


//status

bot.status({
	text: 'ҠÐꪮƬ HΘΜΣƬΘШ∏™',
	type: 'WATCHING',
	time: 12
});

bot.status({
	text: 'High quality music',
	type: 'STREAMING',
	time: 12
}); 

bot.status({
	text: 'with $allMembersCount member',
	type: 'PLAYING',
	time: 12
}); 


//variables

bot.variables({
    loduprefix: "k!",
    kdotwchannel: "",
    kdotwmessage: "",
    kdotwtitle: "",
    kdotwthumbnail: "",
    kdotwimage: "",
    kdotwdescription: "",
    
    
    
    
  })



//Dev cmds

bot.readyCommand({
channel: "784082217840279613",
code: `I was restarted and I am now back online. This is most likely due to a new update or a crash.<@765917032281276426>`
})
//Welcome 

bot.joinCommand({
        channel: "773839106534932480", 
        code: `┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍
<@$authorID> **has joined.** 
<a:KDoT_Accepted:756059166698635295> **This Community has now** $membersCount **happy members.**
┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍┉╍
$author[ҠÐꪮƬ HΘΜΣƬΘШ∏™;$serverIcon]
$title[WELCOME TO ҠÐꪮƬ HΘΜΣƬΘШ∏™]
$description[<a:a_KDoT_butterfly:791386742732095499>  **Greetings <@$authorID>, Hey there Welcome to the Server of $serverName** <a:a_KDoT_redHearts:791386970961215518>

⪦━━━━━━━━━━━━━━━━━━━━⪧

<a:a_KDoT_101:755843648347701479> <a:a_KDoT_arrowslogo:766194022707888168> **Have a Look at the Rules & Regulations of this Server before anything** ⇀ <#756194979486892175>. <a:a_KDoT_RedTick:791386653247275088>

<a:a_KDoT_101:755843648347701479> <a:a_KDoT_arrowslogo:766194022707888168> **Know a Little More About what we do in** ⇀  <#755658405364105297>. <a:a_KDoT_RedTick:791386653247275088>

<a:a_KDoT_101:755843648347701479> <a:a_KDoT_arrowslogo:766194022707888168> **Get Some Roles to Start your Journey here from** ⇀ <#756447279854125056>. <a:a_KDoT_RedTick:791386653247275088>

<a:a_KDoT_101:755843648347701479> <a:a_KDoT_arrowslogo:766194022707888168> **Introduce Yourself to Us and others in** ⇀ <#755638380896976900>. <a:a_KDoT_RedTick:791386653247275088>

⪦━━━━━━━━━━━━━━━━━━━━⪧

<a:a_KDoT_giveaway:781316378090536960> **Thank You for joining our server and keep exploring our server** <a:a_KDoT_giveaway:781316378090536960>
]

$thumbnail[$userAvatar[$authorID]]

$footer[$serverName;$serverIcon]
$image[https://media.discordapp.net/attachments/668642442106503227/779380470273278013/ezgif.com-gif-maker_2.gif]
$color[00ffff]
`
})
bot.onJoined()



//welcome test 


bot.joinCommand({
        channel: "$getServerVar[kdotwchannel]", 
        code: `
        
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[kdotwmessage];{mention};<@$authorID>];{server};$serverName];{user(proper)};$username[$authorID]#$discriminator[$authorID]];{server(members)};$membersCount];{username};$username]

$title[$getServerVar[kdotwtitle]]
$thumbnail[$getServerVar[kdotwthumbnail]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[kdotwdescription];{mention};<@$authorID>];{server};$serverName];{user(proper)};$username[$authorID]#$discriminator[$authorID]];{server(members)};$membersCount];{username};$username]]
$color[00ffff]

`
})
bot.onJoined()






 bot.command({
 name:"joke",
 code:`$title[Here is a joke!] $description[$jsonRequest[https://sv443.net/jokeapi/v2/joke/Any?type=single;joke;]]
$color[00ffff]`
 })

