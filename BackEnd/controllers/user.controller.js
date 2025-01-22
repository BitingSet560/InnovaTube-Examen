const userRepository = require('../repository/user.repository')

const obtenerUsuarios = async (req, res) => {
    try {
        let variable = userRepository.obtenerUsuarios(); 
        return res.send(variable)
    }   
    catch(error){
        return res.send("ocurrio un error")
    }
}
module.exports = {
    obtenerUsuarios
} ;
