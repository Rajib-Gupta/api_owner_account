const createError = require("http-errors");
const { query } = require("../database/connection");

const employeeList = async (req, res) => {
  try {
    const sql = `SELECT e.*, CONCAT(m.f_name,' ',m.l_name) as 'supervisor_name' FROM employee_master as e LEFT JOIN employee_master as m on e.sup_id=m.emp_id`;
    const rows = await query(sql);
    const employees = rows.map((em) => {
      delete em.password;
      return em;
    });
    res.json({ employees });
  } catch (error) {
    console.log(error.message);
    res.json(createError.InternalServerError());
  }
};


module.exports = { employeeList };
