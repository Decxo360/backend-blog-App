const express = require('express');
const pool = require('../bd/config');


const crearUsuario = async(req,res = express.request) =>{
    const data = req.body

    try {

        
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'datos invalidos, hable con el administrador'
        })
    }


}
const borrarUsuario = async(req,res = express.request) =>{

}
const login = async(req,res = express.request) =>{

}
const register = async(req,res = express.request) =>{

}

