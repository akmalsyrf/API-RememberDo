const { todo } = require("../../models");

exports.getAllTodos = async (req, res) => {
  try {
    const response = await todo.findAll({
      order: [["id", "DESC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getTodosByIdCategory = async (req, res) => {
  try {
    const response = await todo.findAll({
      where: { idCategory: req.params.idCategory },
      order: [["id", "DESC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const response = await todo.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.addTodo = async (req, res) => {
  const { title, description, idCategory } = req.body;
  const data = { title, description, isCompleted: "false", idCategory };
  try {
    const response = await todo.create(data);

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { isCompleted } = req.body;
  try {
    await todo.update({ isCompleted }, { where: { id: req.params.id } });
    const response = await todo.findOne({ where: { id: req.params.id } });

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const response = await todo.destroy({
      where: { id: req.params.id },
    });

    res.status(200).send({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
