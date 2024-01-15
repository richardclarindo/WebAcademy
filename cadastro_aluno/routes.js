const express = require('express');
const router =  express.Router();
const db = require('./db');

// Endpoist de leitura de alunos (Read)
    router.get("/alunos", (req, res) => {
        const query = "SELECT * FROM alunos";

        db.query(query,(err, result) => {
            if(err){
                res.status(500).send("Erro ao obter alunos");
            } else {
                res.json(result);
            }
        });
    });

    //ENdpoint de Criação de ALuno (Create)
    router.post('/alunos',(req, res)=>{
        const {nome, idade} = req.body;

        const query = `INSERT INTO alunos (nome, idade) VALUES ('${nome}',${idade})`;

        db.query(query, (err, result)=> {
            if(err){
                res.status(500).send('Erro ao criar aluno');
            } else {
                res.status(201).send('Aluno criado com sucesso');
            }
        });

    });

    //Endpoint de Atualização de ALuno (Update)
    router.put('/alunos/:id', (req, res) => {
        const { id } = req.params;
        const { nome, idade } = req.body;

        const query = `UPDATE alunos SET nome = '${nome}', idade = ${idade} WHERE id_aluno = ${id}`;

        db.query(query, (err, result) => {
            if(err){
                res.status(500).send('Erro ao atualizar aluno');
            } else {
                res.send('Aluno atualizado com sucesso');
            }
        });
    });

    //Endpoint de Exclusão de ALuno (DELETE)
    router.delete('/alunos/:id', (req, res) => {
        const { id } = req.params;
        const { nome, idade } = req.body;

        const query = `DELETE FROM alunos WHERE id_aluno = ${id}`;

        db.query(query, (err, result) => {
            if(err){
                res.status(500).send('Erro ao excluir aluno');
            } else {
                res.send('Aluno excluido com sucesso');
            }
        });
    });

    // Tabela aula

    //ENdpoint de Criação de Aula (Create)
    router.post('/aulas',(req, res)=>{
        const {nome_aula, descricao } = req.body;

        const query = `INSERT INTO aulas (nome_aula, descricao) VALUES ('${nome_aula}','${descricao}')`;

        db.query(query, (err, result)=> {
            if(err){
                res.status(500).send('Erro ao criar aula');
            } else {
                res.status(201).send('Aula criado com sucesso');
            }
        });

    });

    // Endpoist de leitura de aula (Read)
    router.get("/aulas", (req, res) => {
        const query = "SELECT * FROM aulas";

        db.query(query,(err, result) => {
            if(err){
                res.status(500).send("Erro ao obter aulas");
            } else {
                res.json(result);
            }
        });
    });

    //Endpoint de Atualização de aula (Update)
    router.put('/aulas/:id', (req, res) => {
        const { id } = req.params;
        const { nome_aula, descricao } = req.body;

        const query = `UPDATE aulas SET nome_aula = '${nome_aula}', descricao = ${descricao} WHERE id_aula = ${id}`;

        db.query(query, (err, result) => {
            if(err){
                res.status(500).send('Erro ao atualizar aula');
            } else {
                res.send('Aula atualizado com sucesso');
            }
        });
    });




    module.exports = router;