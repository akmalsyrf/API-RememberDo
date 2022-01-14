const { category } = require("../../models");

exports.getAllCategories = async (req, res) => {
  try {
    const response = await category.findAll({
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

exports.addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await category.create({ name });

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

exports.deleteCategory = async (req, res) => {
  try {
    const response = await category.destroy({
      where: { id: req.params.id },
    });

    res.status(200).send({
      status: "success",
      data: req.params.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};
