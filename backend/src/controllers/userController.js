const connection = require('../config/db.js');

async function storeUser(request, response) {
    const params = [
        request.body.username,
        request.body.email,
        request.body.password 
    ];

    const query = "INSERT INTO users(username,email,password) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: results
            });
        }
    });
}

async function loginUser(request, response) {
    const { email, password } = request.body;

    const query = "SELECT * FROM users WHERE email = ?";

    connection.query(query, [email], (err, results) => {
        if (err) {
            response.status(500).json({
                success: false,
                message: "Erro no servidor",
                error: err
            });
        } else if (results.length > 0) {
            const user = results[0];

            if (password === user.password) {
                response.status(200).json({
                    success: true,
                    message: "Login bem-sucedido",
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                response.status(401).json({
                    success: false,
                    message: "Senha incorreta"
                });
            }
        } else {
            response.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }
    });
}

async function getUserData(request, response) {
    const params = Array(request.params.id);

    const query = "SELECT * FROM users WHERE id = ?"

    connection.query(query, params, (err, results) => {

        if (results.length > 0){
            response.status(200).json({
                success: true,
                message: "Success",
                data: results[0]
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Usuário não encontrado",
                sql: err
            })
        }
    })
}

async function deleteUser(request, response) {
    const params = request.params.id;

    const query = "DELETE FROM users WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao tentar excluir o usuário",
                error: err
            });
        }
        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: "Usuário removido com sucesso",
                data: results
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }
    });
}

module.exports = {
    storeUser,
    loginUser,
    getUserData,
    deleteUser
}