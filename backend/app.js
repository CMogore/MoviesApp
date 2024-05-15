const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app =  express();
const { sequelize } = require('./models/'); // Import Sequelize instance and models
const PORT = process.env.PORT || 3000;

var corOptions = {
    origin: 'http://localhost:8080/'
}

app.use(cors(corOptions));
// Middleware
app.use(bodyParser.json());

//testing api
app.get('/' , (req, res) => {
    res.json({message: 'helloooo'})
});



sequelize
  .sync({}) // Sync Sequelize models with database
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database sync error:', error);
  });