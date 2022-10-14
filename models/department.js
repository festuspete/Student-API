const express = require('express');
const { default: mongoose } = require('mongoose');


const DepartmentSchema = new mongoose.Schema({
    name: String,
    Dean: String
})

module.exports = mongoose.model('Department', DepartmentSchema)