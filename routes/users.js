"use strict";
var mysql = require ('mysql2')
var express = require('express');
var config = require('../config')
const bcrypt = require('bcrypt');
const Token = require('../class/token')
var usersRouter = express.Router();
const con = mysql.createConnection(config)
/* GET users listing. */
usersRouter.get('/test', (req, res, next)=>{
  res.json({
    test:true
  })
})

usersRouter.post('/login', function (req, res) {
  con.query("SELECT * FROM users WHERE email = '" + req.body.email + "'", function (err, rows, fields) {
    if (rows.length > 0) {
        bcrypt.compare(req.body.password, rows[0].password, function (err, result) {
            if (err)
                return res.status(400).json({ code: -5, mensaje: 'ocurrio un error desconocido' });
            if (result) {
                var tokenData = {
                    correo: req.body.email,
                    id: rows[0].id,
                    nombre: rows[0].name
                };
                var token = Token.getjwtToken(tokenData)
                res.json({
                    code: 200,
                     token: token
                });
            }
            else {
                res.status(400).json({
                    code: -3,
                    token: 'usario o contraseña no valida'
                });
            }
        });
    }
    else {
        res.status(400).json({
            code: -2,
            token: 'usario o contraseña no valida'
        });
    }
});
});


module.exports = usersRouter
