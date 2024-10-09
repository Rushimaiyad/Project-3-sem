const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const hotelRoutes = require('./routes/hotelRoutes');
const app = express();

mongoose.connect('mongodb+srv://maiyadrushi11:rushi%403011@cluster0.4ia1a.mongodb.net/Hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/hotels', hotelRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));