module.exports = ({
    name: "resetwall",
    code: `$resetServerVar[kdotwimage]
    $resetServerVar[kdotwthumbnail]
    $resetServerVar[kdotwdescription]
    $resetServerVar[kdotwtitle]
 $resetServerVar[kdotwmessage]
 
Welcome message has been successfully reset .

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});