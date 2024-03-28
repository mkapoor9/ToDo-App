const { createTodo,updateTodo } = require("./types");
const { todos } = require("./db");
const cors = require("cors");



const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.get('/todos',async (req,res)=>{
    const getTodos = await todos.find();
     res.json({
        getTodos
     })
});

app.post('/todo',async (req,res)=>{
    const todo = req.body;
    const response = createTodo.safeParse(todo);

    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    }

    await todos.create({
        title: todo.title,
        description: todo.description,
        completed:false
    })

    res.json({
        msg:"Todo Created",
    })
})

app.put('/completed',async (req,res)=>{
    const update = req.body;
    const response = updateTodo.safeParse(update);

    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    } 

    await todos.findByIdAndUpdate(req.body.id,{
        completed:true,
    })

    res.json({
        msg:"Todo Marked as completed",
    })
})

app.listen(port);