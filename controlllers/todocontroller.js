const TODO = require("./../models/Todo")
exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)
        res.json({
            message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,

        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const result = await TODO.find()
        //const result=await TODO.create() //add to DB
        //const result=await TODO.find() //get all records
        //const result=await TODO.findByIdAndUpdate() //update
        //const result=await TODO.findByIdAndDelete() // delete
        res.json({
            message: " get todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,

        })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        //const result = await TODO.find()
        //const result=await TODO.create() //add to DB
        //const result=await TODO.find() //get all records
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true }) //update
        //const result=await TODO.findByIdAndDelete() // delete
        res.json({
            message: " updated todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,

        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        //const result = await TODO.find()
        //const result=await TODO.create() //add to DB
        //const result=await TODO.find() //get all records
        const todoId = req.params.id
        // const result = await TODO.findByIdAndUpdate(todoId, req.body) //update
        const result = await TODO.findByIdAndDelete(todoId) // delete
        res.json({
            message: " deleted  todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,

        })
    }
}