const Department = require('../models/department');

const createDepartment = async (req, res) => {
    const {name, dean} = req.body;
    try {
        const department = await Department.create(req.body);
        res.status(201).json({department});
        
    } catch (error) {
        res.status(500).json({msg: error});
        
    }

};

module.exports = {createDepartment};