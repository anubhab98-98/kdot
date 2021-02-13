module.exports = ({
    name: "setwelcomethumbnail",
    aliases: ['setwthumbnail','swelcomethumbnail','swthumbnail'],
    code: `
    $setServerVar[kdotwthumbnail;$message]

Welcome thumbnail has been changed by **$username** .
$argsCheck[>1;{color:ff0000} {description:<:AR_redtick:786483262997790731> Please provide the link of welcome image , what you want .Usage: \`setwthumbnail <image link>\`}]
$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\` permission .}]
`
});