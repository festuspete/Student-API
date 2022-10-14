const express = require('express');
const { default: mongoose } = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    level: Number,
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    note_id: 
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'}]
})

module.exports = mongoose.model('User', UserSchema)