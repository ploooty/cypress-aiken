
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

app.post('/mint', async (req, res) => {
  const { address, metadata, min_price } = req.body;

  try {
    const response = await axios.post('https://cardano-blockchain/mint', {
      address,
      metadata,
      min_price,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
