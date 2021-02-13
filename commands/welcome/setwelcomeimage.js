module.exports = ({
    name: "setwelcomeimage",
    aliases: ['swelcomeimage','setwimage','swi'],
    code: `$setServerVar[kdotwimage;$message[1]]

Welcome message image has been changed by **$username** .

$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please provide the link of welcome image , what you want .Usage: \`$getServerVar[kdotprefix]setwimage <image link>\`}]

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});