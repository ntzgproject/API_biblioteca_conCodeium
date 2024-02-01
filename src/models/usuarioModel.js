const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    id: String
}, { collection: 'libros' });

const Libro = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;