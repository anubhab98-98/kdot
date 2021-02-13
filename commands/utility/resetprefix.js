module.exports = ({
    name: "resetprefix",
    aliases: ['rprefix'],
    code: `$resetServerVar[loduprefix]
$onlyPerms[admin;Sorry you haven't enough permission .]
Prefix has been reset to \`$getVar[loduprefix]\`  by **$username**`
});