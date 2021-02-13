module.exports = ({
    name: "setwelcomemessage",
    aliases: ['swmessage','setwmessage','swm'],
    code: `$setServerVar[kdotwmessage;$message]

Welcome Message has been changed  by **$username** .


$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please write welcome message, what you want .Usage: \`setmessage <yourwelcomemessage>\`}]

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});