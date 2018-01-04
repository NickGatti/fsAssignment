var fs = require( 'fs' );

console.log( fs.readFileSync( './challenge1/info.txt', 'utf-8' ) );

let names = fs.readFileSync( './challenge2/info.txt', 'utf-8' )
names = names + 'Nick\nNick\nCarlos\nJennifer\n'
fs.writeFileSync( './challenge2/info.txt', names )

//fs.rename( './challenge3/binfo.txt', './challenge3/info.txt' )

let dir = './challenge4/copyfolder'

if ( !fs.existsSync( dir ) ) {
    fs.mkdirSync( dir );
}
fs.createReadStream( './challenge4/info.txt' ).pipe( fs.createWriteStream( './challenge4/copyfolder/info.txt' ) );