const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bd.sqlite', 
});

const Vuz = sequelize.define('vuz', {
  z1: Sequelize.TEXT,
  z1full: Sequelize.TEXT,
  z2: Sequelize.TEXT,
  codvuz: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  region: Sequelize.TEXT,
  city: Sequelize.TEXT,
  status: Sequelize.TEXT,
  obl: Sequelize.INTEGER,
  oblname: Sequelize.TEXT,
  gr_ved: Sequelize.TEXT,
  prof: Sequelize.TEXT,
},
{
    freezeTableName: true,
    timestamps: false, 
  }
  );

const GrProj = sequelize.define('gr_proj', {
  g1: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  codkon: {
    type: Sequelize.TEXT,
    primaryKey: true,
  },
  codvuz: Sequelize.INTEGER,
  z2: Sequelize.TEXT,
  g7: Sequelize.TEXT,
  g5: Sequelize.INTEGER,
  g2: Sequelize.INTEGER,
  g21: Sequelize.INTEGER,
  g22: Sequelize.INTEGER,
  g23: Sequelize.INTEGER,
  g24: Sequelize.INTEGER,
  g6: Sequelize.TEXT,
  g8: Sequelize.TEXT,
  g9: Sequelize.TEXT,
  g10: Sequelize.TEXT,
  g11: Sequelize.TEXT,
},
{
    freezeTableName: true,
    timestamps: false, 
});

const GrKonk = sequelize.define('gr_konk', {
  k2: Sequelize.TEXT,
  codkon: {
    type: Sequelize.TEXT,
    primaryKey: true,
  },
  k12: Sequelize.INTEGER,
  k4: Sequelize.INTEGER,
  k41: Sequelize.INTEGER,
  k42: Sequelize.INTEGER,
  k43: Sequelize.INTEGER,
  k44: Sequelize.INTEGER,
  npr: Sequelize.INTEGER,
}, 
{
    freezeTableName: true,
    timestamps: false, 
});

sequelize.sync()
  .then(() => {
    console.log('База данных синхронизирована');
  })
  .catch((err) => {
    console.error('Ошибка синхронизации базы данных:', err);
  });

app.get('/api/vuz', async (req, res) => {
  try {
    const data = await Vuz.findAll();
    res.json(data);
  } catch (error) {
    console.error('Ошибка при получении данных из vuz:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/gr_proj', async (req, res) => {
  try {
    const data = await GrProj.findAll();
    console.log('Данные из gr_proj:', data);
    res.json(data);
  } catch (error) {
    console.error('Ошибка при получении данных из gr_proj:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/gr_konk', async (req, res) => {
  try {
    const data = await GrKonk.findAll();
    res.json(data);
  } catch (error) {
    console.error('Ошибка при получении данных из gr_konk:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
