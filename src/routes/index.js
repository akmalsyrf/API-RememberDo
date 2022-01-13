const express = require("express");
const router = express.Router();

const { getAllTodos, getTodosByIdCategory, getTodo, addTodo, updateTodo, deleteTodo } = require("../controller/todo");

router.get("/todos", getAllTodos);
router.get("/todos/idCategory", getTodosByIdCategory);
router.get("/todo/id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/id", updateTodo);
router.delete("/todo/id", deleteTodo);

const { getAllCategories, addCategory, deleteCategory } = require("../controller/category");
router.get("/categories", getAllCategories);
router.post("/category", addCategory);
router.delete("/category/id", deleteCategory);

module.exports = router;
