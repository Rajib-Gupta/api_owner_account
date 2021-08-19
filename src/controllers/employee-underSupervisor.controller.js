const createError = require("http-errors");
const { query } = require("../database/connection");

const employeeUnderSuper= async (req, res) => {
    var email = req.body.email;
    try {
      var sql = `
      SELECT em.* FROM employee_master as e INNER JOIN employee_master as em on em.sup_id = e.emp_id and e.emp_id!=em.emp_id where e.email="${email}"`;
      var rows =  await query(sql);
        employees = rows.map((emp) => {
          delete emp.password;
          return emp;
        });
        res.json({ employees });
    } catch (error) {
      console.log(error.message);
      res.json(createError.InternalServerError());
    }
    
  };
  module.exports= {employeeUnderSuper}