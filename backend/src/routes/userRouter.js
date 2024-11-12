    const { Router } = require('express');
    const router = Router();
    const { storeUser, loginUser, getUserData, getUsers } = require('../controllers/userController');


    /**
     * @swagger
     * /register:
     *   post:
     *     summary: Armazena um novo usuário
     *     responses:
     *       200:
     *         description: Sucesso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Sucesso
     */
    router.post('/register', storeUser);

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Conecta o usuário
     *     responses:
     *       200:
     *         description: Logado com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Logado com sucesso
     */
    router.post('/login', loginUser); 

    /**
     * @swagger
     * /get/user/{id}:
     *   get:
     *     summary: Retorna os dados do usuário pelo ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID do usuário
     *     responses:
     *       200:
     *         description: usuário encontrado com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     */
    router.get('/get/user/:id', getUserData);


    module.exports = router;