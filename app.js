const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));
app.use(express.static('views'));

app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});