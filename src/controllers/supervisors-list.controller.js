const createError = require("http-errors");
const { query } = require("../database/connection");

const supervisors = async (req, res) => {
  try {
    var sql = "SELECT * FROM employee_master where role=0 ";
    const rows = await query(sql);
    if (!rows.length()) {
      res.json(createError.InternalServerError());
    }
    res.json("connected");
  } catch (error) {
    console.log(error.message);
    res.json(createError.InternalServerError());
  }
};

module.exports = { supervisors};
