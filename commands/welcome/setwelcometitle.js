module.exports = ({
    name: "setwelcometitle",
    aliases: ['setwtitle','swtitle','swt'],
    code: `$setServerVar[kdotwtitle;$message]


Welcome Title has been changed to \`$message\` by **$username** .
$onlyIf[$message!=;Please write the title, what you want by default it is \`WELCOME TO THE SERVER\`.Usage: \`$getServerVar[prefix]setwtitle <yourtitle>\`]
$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\` permission .}]
`
});