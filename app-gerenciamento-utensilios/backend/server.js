const express = require('express');
const mongoose = require('mongoose');

const Utensilio = require('./models/Utensilio');
const Utilizacao = require('./models/Utilizacao');

const app = express();
const PORT = 3000;

// Conectando ao MongoDB Atlas
mongoose.connect('')
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch((error) => console.log('Erro ao se conectar:', error));

app.use(express.json());



// Rota para buscar utensílios
app.get('/utensilios', async (req, res) => {
    try {
        const utensilios = await Utensilio.find({});
        res.json(utensilios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar utensílios.' });
     }
});

// Rota para buscar utilizações
app.get('/utilizacoes', async (req, res) => {
    try {
        const utilizacoes = await Utilizacao.find({});
        res.json(utilizacoes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar utensílios.' });
    }
});

app.post('/utensilios', async (req, res) => {
    try {
        const { name, description, lastUsed, qrCode } = req.body;

        const exist = await Utensilio.findOne({ name });
        if (exist) {
            return res.status(400).json({ error: "Utensílio já cadastrado!" });
        }

        const novoUtensilio = new Utensilio({ name, description, lastUsed, qrCode });
        await novoUtensilio.save();

        res.status(201).json(novoUtensilio);
    } catch (error) {
        res.status(500).json({ error: "Erro ao salvar utensílio." });
    }
});

app.post('/utilizacoes', async (req, res) => {
    try {
        const { utensilioName, responsavelUso, descriptionUso, dataUso } = req.body;

        const utensilio = await Utensilio.findOne({ name: utensilioName } );

        if (!utensilio) {
            return res.status(404).json({ error: 'Utensílio não encontrado.' });
        }

        const novaUtilizacao = new Utilizacao({
            utensilioId: utensilio._id,
            responsavelUso,
            descriptionUso,
            dataUso
        });
        await novaUtilizacao.save();

        res.status(201).json(novaUtilizacao);
    } catch (error) {
        res.status(500).json({ error: "Erro ao registrar utilização."});
    }
});

app.get('/utensilios/:name', async (req, res) => {
    try {
        const nomeUtensilio = req.params.name;

        const utensilio = await Utensilio.findOne({ name: nomeUtensilio });

        if (!utensilio) {
            return res.status(404).json({ error: 'Utensílio não encontrado.' });
        }

        res.json(utensilio);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar utensílio.' });
    }
});

app.get('/utilizacoes/:utensilioId', async (req, res) => {
    try {
        const { utensilioId } = req.params;

        const utilizacoes = await Utilizacao.find({ utensilioId }).sort({ data: -1 });

        if (utilizacoes.length === 0) {
            return res.status(404).json({ message: 'Nenhuma utilização encontrada para este utensílio.' });
        }

        res.json(utilizacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar utilizações.' });
    }
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});