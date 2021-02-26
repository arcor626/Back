const express = require("express");
// Inicializar app
const app = express();
var BodyParser = require('body-parser');

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

const db = require('./config/database');
db.authenticate().then(() => {
        console.log('Conexion exitosa');
        app.listen(3000, () => {
            console.log('Puerto 3000');
        });
    })
    .catch(err => {
        console.log('No se conecto');
    })

var appRoutes = require('./routes/app');
var loginRoute = require('./routes/login');
var accesoriosRoute = require('./routes/accesorios');
var mobiliarioRoute = require('./routes/mobiliario');
var hardwareRoute = require('./routes/hardware');
var comunicacionRoute = require('./routes/comunicacion');
var papeleriaRoute = require('./routes/papeleria');
var limpiezaRoute = require('./routes/limpieza');
var insumosRoute = require('./routes/insumos');
var serviciosRoute = require('./routes/servicios');
var provedorRoute = require('./routes/proveedor');
var personalRoute = require('./routes/personal');
var elementosRoute = require('./routes/elementos');
var areasRoute = require('./routes/area');
var marcasRoute = require('./routes/marcas');

app.use('/login', loginRoute);
app.use('/accesorios', accesoriosRoute);
app.use('/mobiliario', mobiliarioRoute);
app.use('/hardware', hardwareRoute);
app.use('/comunicacion', comunicacionRoute);
app.use('/papeleria', papeleriaRoute);
app.use('/limpieza', limpiezaRoute);
app.use('/insumos', insumosRoute);
app.use('/servicios', serviciosRoute);
app.use('/proveedor', provedorRoute);
app.use('/personal', personalRoute);
app.use('/area', areasRoute);
app.use('/elementos', elementosRoute);
app.use('/marcas', marcasRoute);
app.use('/', appRoutes);



/*const db = require('./config/database');
db.authenticate()
  .then(() => {
    console.log('Conectado');
    app.listen(3000,()=>{
    console.log('Express puerto 3000: \x1b[32m%s\x1b[0m',' online');
    });
})
  .catch(err => {
    console.log('No se conecto');
})*/