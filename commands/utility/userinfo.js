module.exports = ({
    name: "userinfo",
    aliases: ['whois'],
    code: `$thumbnail[$userAvatar[$findUser[$message]]]
    $author[$username[$findUser[$message]]#$discriminator[$findUser[$message]] INFO]

$addField[Key Permissions:;$userPerms[$findUser[$message]]]

$addField[Highest Role:;<@&$highestRole[$findUser[$message]]>]
$addField[Custom Status:;$getCustomStatus[$findUser[$message]]]
$addField[Status:;$customEmoji[$status[$findUser[$message]]] $status[$mentioned[1;yes]]]
$addField[Platform:;$customEmoji[$platform[$findUser[$message]]] $platform[$mentioned[1;yes]]]
$addField[Joined Date:;$memberJoinedDate[$findUser[$message]];time]
$addField[Creation Date:;$creationDate[$findUser[$message]]]
$addField[Username:;$username[$findUser[$message]]#$discriminator[$findUser[$message]]]
$footer[ID: $findUser[$message]]

$color[$getRoleColor[$highestRole[$findUser[$message]]]]
`
});
