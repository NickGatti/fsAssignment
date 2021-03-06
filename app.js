var fs = require( 'fs' );
var glob = require( 'glob' )

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

let sentence = fs.readFileSync( './challenge5/info.txt', 'utf-8' )
sentence = sentence.replace( /-/g, ' ' )
fs.writeFileSync( './challenge5/info.txt', sentence )

glob( './challenge6/**/*.txt', function ( er, files ) {
    for ( let i = 0; i < files.length; i++ ) {
        console.log( files[ i ] );
        console.log( fs.readFileSync( files[ i ], 'utf-8' ) );
    }
} )