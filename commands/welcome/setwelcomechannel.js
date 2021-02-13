module.exports = ({
    name: "setwelcomechannel",
    aliases: ['setwchannel','swc','swchannel'],
    code: `
    $setServerVar[kdotwchannel;$mentionedChannels[1]]


Welcome Channel has been changed to <#$mentionedChannels[1]>  by **$username** .

$argsCheck[1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please mention that channel, where you want to send the welcome message.Usage: \`$getServerVar[prefix]setwchannel #channel\`}]

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});