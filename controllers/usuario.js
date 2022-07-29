const express = require('express');
const pool = require('../bd/config');


const obtenerUsuario = async(req,res=express.response)=>{

    try {
        const data = await pool.query('SELECT * FROM usuarios WHERE(id_usuario = $1)', req.body.id)
        pool.end()
        res.status(201).json({
            ok:true,
            data: data.rows
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error en la base de datos O usuario no encontrado'
        })        
    }

}

const obtenerUsuarios = async (req, res=express.response) => {


    try {

        const data = await pool.query('SELECT * FROM usuarios')
        console.log(data.rows);
        pool.end()

        res.status(201).json({
            ok:true,
            data: data.rows
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en la base de datos'
        })
    }


}

const crearUsuario = async (req, res = express.response) => {

    const { nombre, apellido_a, apellido_b, nickname, edad } = body.req
    const mysqlquery = 'INSERT INTO usuarios (nombre,apellido_p,apellido_m,nickname,edad) VALUES($1,$2,$3,$4,$5)'
    const datos = [nombre, apellido_a, apellido_b, nickname, edad]

    try {

        const resp = await pool.query(mysqlquery, datos);
        pool.end()

        res.status(201).json({
            ok: true,
            msg: `Han sido insertadas ${resp.rowCount} en la bd`
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en los datos enviados'
        })
    }
}



module.exports = {
    obtenerUsuarios,
    crearUsuario
}