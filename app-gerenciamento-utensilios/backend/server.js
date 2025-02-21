const express = require('express');
const mongoose = require('mongoose');

const Utensilio = require('./models/Utensilio');

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

app.post('/utensilios', async (req, res) => {
    try {
        const { name, description, lastUsed, qrCode } = req.body;

        // Verifica se já existe um utensílio com o mesmo nome
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


// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});