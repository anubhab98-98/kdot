module.exports = ({
    name: "resetwelcomemessage",
    code: `$resetServerVar[kdotwmessage]
Welcome message has been successfully reset .

$onlyPerms[admin;manageserver;{color:ff0000} {description:<:AR_redtick:786483262997790731> Sorry you haven't \`ADMINISTRATOR\` or \`MANAGE_SERVER\`enough permission .}]
`
});