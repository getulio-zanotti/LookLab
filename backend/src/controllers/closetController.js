const connection = require('../config/db.js');
const dotenv = require('dotenv').config();

const fs = require('fs');
const { console } = require('inspector');
const path = require('path');

const uploadPath = path.join(__dirname, '..', 'uploads');

if (! fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeCloth(request, response) {
    
    if (!request.files) {
        return response.status(400).json({
                success: false,
                message: "No files were uploaded."
            });
    }

    const image = request.files.Image;
    const imageName = Date.now() + path.extname(image.name);

    image.mv(path.join(uploadPath, imageName), (erro) => {
        if (erro) {
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo."
            })
        }

        const params = Array(
            imageName,
            request.body.Brand,
            request.body.Size,
            request.body.Color
        )

        const query = "INSERT INTO clothes(image, brand, size, color) VALUES(?,?,?,?)";
        
        connection.query(query, params, (err, results) => {
            if (results){
                response.status(200).json({
                    success: true,
                    message: "Peça adicionada com sucesso!",
                    data: results
                })
            } else{
                response.status(400).json({
                    success: false,
                    message: "Error",
                    sql: err
                })
            }
        })
    });
}

async function getCloset (request, response) {
    const params = Array(request.params.id);
    const query = "SELECT * FROM clothes WHERE user_id = ? ORDER BY id DESC"
    connection.query(query, params, (err, results) => {
        if (results){
            response.status(200).json({
                success: true,
                message: "Success",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Error",
                sql: err
            })
        }
    })
}

async function getCloth(request, response) {
    const params = Array(request.params.id);
    console.log(params);

    const query = "SELECT * FROM clothes WHERE id = ?"

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
                message: "Error",
                sql: err
            })
        }
    })
}

module.exports = {
    storeCloth,
    getCloset,
    getCloth
}