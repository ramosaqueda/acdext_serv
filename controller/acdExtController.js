const express = require('express');
const db= require('../db/db');

exports.getAcdExt = async (req,res) => {
    db.query('SELECT * FROM acd_extr.acdextran',function(error,result,fields){
        if(error!==null)
          res.send(error);
        else
          res.json(result)
      });
     
}

exports.putAcdExt = async (req,res) => {
    let id = req.body.id;
 
    let rit = req.body.rit;
    let detilegal = req.body.detilegal;
    if (!id){
       return res.status(400).send('please send ID correct MFK!');
    }
    const query =`UPDATE acd_extr.acdextran SET DETENCION_ILEGAL = '${ detilegal }', RIT= '${ rit }' WHERE (id = ${ id })`;
    console.log(query);
    try {
        await db.query(query);
        return res.status(200).send('OK')
    }
    catch(error){
        return res.status(400).send(error)
    }
    


}


