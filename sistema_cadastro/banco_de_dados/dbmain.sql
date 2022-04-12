CREATE DATABASE db_analytics

USE db_analytics

CREATE TABLE db_pontos_turistico(
    id INT PRIMARY KEY SERIAl,
    nome VARCHAR,
    descricao VARCHAR,
    estado VARCHAR,
    cidade VARCHAR,
    responsavel VARCHAR,
    email_responsavel VARCHAR,
    fone_responsavel
)

SELECT * FROM db_pontos_turistico
INSERT INTO db_pontos_turistico (DEFAULT, 'nome', 'descricao', 'estado', 'cidade', 'responsavel', 'email_responsavel', 'fone_responsavel')
