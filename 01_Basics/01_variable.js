const accountId = 12345
let accountEmail = 'workforxyz@gmail.com'
var accountPassword = '1234'
accountCity = 'alld'

let accountState;

// accountId = 32145 // change not allowed in const
// accountEmail = 'vibhas@gmail.com' // changes allowed in let
// accountPassword = '321' // changes allowed in var

accountCity = 'Up' //  changes allowed
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/**
 * Always use const and let for variable declaration.
 * Avoid using var because it have issue in scope.
 */