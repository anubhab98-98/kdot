module.exports = ({
    name: "setwelcomedescription",
    aliases: ['swdescription','setwdescription','swd'],
    code: `$setServerVar[kdotwdescription;$message]

Welcome Message description has been changed  by **$username** .


$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please write welcome embed message, what you want .Usage: \`setwdescription <yourwelcomedescription>\`}]

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});