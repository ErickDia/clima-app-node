
const {argv} = require('./config/yargs');
console.log(argv);
const {getInstance} = require('./lugar/lugar');
    

getInstance(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));