const User = require('../models/user');

const register = async (req, res) => {
    const { name, level, departmentId, NoteId} = req.body;
    
    try {
        const user = await User.create({
            name: name,
            level: level,
            department_id: departmentId,
            note_id: NoteId,

        })
        res.status(201).json({ user})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const login = async (req, res) => {
    const { name, level } = req.body;
    try {
        const user = await User.findOne({
            name,
        })
        if(!user) {
            res.status(404).json({ msg: 'User not found' })
        }
        res.status(201).json({ user})
        
    } catch (error) {
        res.status
        
    }
}

const getAllUsers = async (req, res) => {
    const users = await User.find().populate('note_id',"-department_id")
    res.status(200).json({ users })
}


module.exports = {
    register,
    login,
    getAllUsers
}