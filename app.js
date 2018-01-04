var fs = require( 'fs' );

console.log( fs.readFileSync( './challenge1/info.txt', 'utf-8' ) );

let names = fs.readFileSync( './challenge2/info.txt', 'utf-8' )
names = names + 'Nick\nNick\nCarlos\nJennifer\n'
fs.writeFileSync( './challenge2/info.txt', names )