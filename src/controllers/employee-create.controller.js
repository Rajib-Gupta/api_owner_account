const createError = require("http-errors");
const { query } = require("../database/connection");

const employeeCreate = async (req, res) => {
  var { f_name, l_name, email, phone, role, password, sup_id } = req.body;
  try {
    const sql = `insert into employee_master(f_name,l_name,phone,email,role,password,sup_id) values (${f_name},${l_name},${email},${phone},${role},${password},${sup_id})`;
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

module.exports = { employeeCreate };
