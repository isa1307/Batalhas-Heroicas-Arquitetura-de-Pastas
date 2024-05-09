const pool = require('../config/dbConfig');

// pegar todos os herois
async function getHerois(req, res) {
    try {
        const { rows } = await pool.query('SELECT * FROM herois');
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// criar um heroi
async function createHeroi(req, res) {
    const { nome, poder } = req.body;
    try {
        const { rows } = await pool.query('INSERT INTO herois (nome, poder, nivel, vida) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, vida]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// editar um heroi
async function updateHeroi(req, res) {
    const id = req.params.id;
    const { nome, poder, nivel, vida } = req.body;
    try {
        const { rows } = await pool.query('UPDATE herois SET nome = $1, poder = $2, nivel = $3, vida = $4 WHERE id = $5', [nome, poder, nivel, vida, id]);
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// deletar um heroi
async function deleteHeroi(req, res) {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM herois WHERE id = $1', [id]);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {getHerois, createHeroi, updateHeroi, deleteHeroi};

