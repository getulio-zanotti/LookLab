const { Router } = require('express');
const router = Router();
const { storeCloth, getCloset, getCloth } = require('../controllers/closetController');

/**
 * @swagger
 * /store/cloth:
 *   post:
 *     summary: Armazena uma nova roupa no banco de dados
 *     responses:
 *       200:
 *         description: Roupa armazenada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Roupa armazenada com sucesso
 */
router.post('/store/cloth', storeCloth);

/**
 * @swagger
 * /get/closet/{id}:
 *   get:
 *     summary: Retorna todas as roupas do closet
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de roupas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/get/closet/:id', getCloset);

/**
 * @swagger
 * /get/cloth/{id}:
 *   get:
 *     summary: Retorna uma roupa específica pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da roupa
 *     responses:
 *       200:
 *         description: Roupa retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/get/cloth/:id', getCloth);
//precisei da correção do ChatGPT para esta rota
//Ao inserir o id o Swagger não identificava esta rota

module.exports = router;
