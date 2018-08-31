import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';

function fn_connect() {
  let dbconfig = require('../../server/config/db-config.json');
  let connection = mysql.createConnection(dbconfig)

  return connection
}

module.exports = fn_connect