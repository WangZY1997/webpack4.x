const path = require('path')
// module.exports = {
//     entry:'./input.js',
//     output:{
//         path:path.resolve(__dirname,'dist'),
//         filename:'output.bundle.js'
//     },
// }




module.exports = {
    entry:{
            home:'./home.js',
            about:'./about.js',
            other:'./other.js' 
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    mode:"production"
}