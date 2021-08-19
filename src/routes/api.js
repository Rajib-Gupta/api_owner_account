const router = require("express").Router();
const api = require("../controllers/employee-list.controller");
const create = require("../controllers/employee-create.controller");
const update = require("../controllers/employee-update.controller");
const addKpi = require("../controllers/employee-addKpi.controller");
const underSuper = require("../controllers/employee-underSupervisor.controller");
const employeeById = require("../controllers/employee-detailsById.controller");
const employeeKpiDetails = require("../controllers/employee-kpiDetails.controller");
const supervisors = require("../controllers/supervisors-list.controller");
const givenKpiSuper = require("../controllers/supervisor-givenKpi.controller");
const givenKpiEmployee = require("../controllers/employee-givenKpi.controller");
const login = require("../controllers/master-login.controller");
const employeeDelete = require("../controllers/employee-delete.controller");
const verifyToken = require("../controllers/verifyToken.controller");


router.get("/list", verifyToken.verifyToken, api.employeeList);
router.post("/create", verifyToken.verifyToken, create.employeeCreate);
router.put("/update/:id", verifyToken.verifyToken, update.employeeUpdate);
router.post("/add/:id", verifyToken.verifyToken, addKpi.employeeAddKpi);
router.post(
  "/employees",
  verifyToken.verifyToken,
  underSuper.employeeUnderSuper
);
router.get(
  "/details/:id",
  verifyToken.verifyToken,
  employeeById.employeeDetailsById
);
router.get("/ownDetails/:id", employeeById.employeeDetailsById);
router.get("/kpi_details/:id", employeeKpiDetails.employeeKpiDetails);
router.get("/supervisor", supervisors.supervisors);
router.get(
  "/sup_given_kpi_details/:id",
  verifyToken.verifyToken,
  givenKpiSuper.supervisorGivenKpi
);
router.get("/emp_given_kpi_details/:id", givenKpiEmployee.employeeGivenKpi);
router.post("/masterlogin", login.masterLogin);
router.post(
  "/delete/:id",
  verifyToken.verifyToken,
  employeeDelete.employeeDelete
);

module.exports = router;
