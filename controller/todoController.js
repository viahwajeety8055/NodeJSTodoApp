const pool = require('../database');

const todoController = {
    getAll: async(req, res) => {
        try{
            const [rows, fields] = await pool.query("select * from todo_items");
            res.json({
                data: rows
            });
        }catch(error){
            res.json({
                status: 'error'
            })
        }
    },
    getById: async(req, res) => {
        try{
            const { id } = req.params;
            const [rows, fields] = await pool.query("select * from todo_items where id = ?",[id]);
            res.json({
                data: rows
            });
        }catch(error){
            res.json({
                status: 'error'
            })
        }
    },
    create: async(req,res) => {
        try{
            const { id, task } = req.body;
            const sql = 'insert into todo_items (id, task) values (?, ?)';
            const [rows, fields] = await pool.query(sql,[id, task])
            res.json({
                data: rows
            })
        }catch(error){
            res.json({
                status: 'error'
            })
        }
    },
    update: async(req, res) => {
        try{
            const { task } = req.body;
            const { id }= req.params;
            const sql = 'update todo_items set task = ? where id = ?';
            const [rows, fields] = await pool.query(sql,[task, id]);
            res.json({
                data: rows
            })
        }catch(error){
            res.json({
                status: 'error'
            })
        }
    },
    delete: async(req, res) => {
        try{
            const { id } = req.params;
            const sql = 'delete from todo_items where id = ?';
            const [ rows, fields ] = await pool.query(sql,[id]);
            res.json({
                message: 'delete Successfully'
            })
        }catch(error){
            res.json({
                status: 'error'
            })
        }
    }
}

module.exports = todoController;