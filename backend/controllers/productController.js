
const db = require('../config/db');

// Listar todos os produtos
exports.getProducts = async (req, res) => {
    try {
        const [products] = await db.query(
            `SELECT *, condition_status AS \`condition\`
             FROM products`
        );
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos.' });
    }
};

// Buscar produto por ID
exports.getProductById = async (req, res) => {
    try {
        const [products] = await db.query(
            `SELECT *, condition_status AS \`condition\`
             FROM products WHERE id = ?`,
            [req.params.id]
        );

        if (products.length === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json(products[0]);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto.' });
    }
};

// Cadastrar produto
exports.createProduct = async (req, res) => {
    try {
        const {
            name, description, price, image,
            brand, category, gender, condition
        } = req.body;

        if (!name || price === undefined || Number(price) <= 0) {
            return res.status(400).json({
                message: 'Nome e preço válido são obrigatórios.'
            });
        }

        const [result] = await db.query(
            `INSERT INTO products
            (name, description, price, image, brand, category, gender, condition_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, description, price, image, brand, category, gender, condition]
        );

        res.status(201).json({
            message: 'Produto cadastrado com sucesso.',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar produto.' });
    }
};

// Atualizar produto
exports.updateProduct = async (req, res) => {
    try {
        const {
            name, description, price, image,
            brand, category, gender, condition
        } = req.body;

        if (!name || price === undefined || Number(price) <= 0) {
            return res.status(400).json({
                message: 'Nome e preço válido são obrigatórios.'
            });
        }

        const [result] = await db.query(
            `UPDATE products
             SET name = ?, description = ?, price = ?, image = ?,
                 brand = ?, category = ?, gender = ?, condition_status = ?
             WHERE id = ?`,
            [
                name, description, price, image,
                brand, category, gender, condition, req.params.id
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json({ message: 'Produto atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto.' });
    }
};

// Excluir produto
exports.deleteProduct = async (req, res) => {
    try {
        const [result] = await db.query(
            'DELETE FROM products WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json({ message: 'Produto excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produto.' });
    }
};
