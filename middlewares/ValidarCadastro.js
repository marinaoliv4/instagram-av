const {Usuario} = require('../models');

module.exports = async (request, response, next) => {
    const {nome, email, senha} = request.body; //recebo o email q o usuario digitou
    let user = await Usuario.findAll({where: {email}}); //verifica se existe usuario c o email
    
    if (nome == null || email == null || senha == null) {
    response.status(400).json({ erro: 'preencha os campos obrigatórios'});
    }

    if(user.length) { 
        response.status(400).json({erro:"email já cadastrado"})
        return;
    }else{
        if(!email){
            response.status(400).json({erro:"por gentileza informe o email ae"})
        }else{
            if (senha.length < 6 || senha.length > 12) {
                response.status(400).json({erro: "sua senha deve conter entre 6 e 12 digitos"});
            } else {
                next();    
            }
        }
    }
}

