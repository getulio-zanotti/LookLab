const router = require('express').Router();
const { storeUser, loginUser } = require('../controllers/userController');

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

module.exports = router;