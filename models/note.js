const express = require('express');
const {mongoose } = require('mongoose');


const NoteSchema = new mongoose.Schema({
    note: String,
    department_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    } 
})

module.exports = mongoose.model('Note', NoteSchema)