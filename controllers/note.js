const Note = require('../models/note')

const createNote = async (req, res) => {
    const {note, departmentId} = req.body
    try {
        const user = await Note.create({
            note,
            department_id: departmentId,
        })
        res.status(201).json({ user});
        
    } catch (error) {
        res.status(500).json({ msg: error})
        
    }
}

const getAllNotes = async (req, res) => {
    const notes = await Note.find().populate('user_id')
    res.status(200).json({ notes})
}

module.exports = {
    createNote,
    getAllNotes,
}