const express = require("express");
const router = express.Router();
const UserCon = require("../controller/UserController");

router.post("/user/create", (req, res) => {
  UserCon.create(req, res);
});
router.get("/user/getById/:id", (req, res) => {
  UserCon.getById(req, res);
});

router.delete("/user/delete/:id", (req, res) => {
  UserCon.deleteById(req, res);
});
router.put("/user/update/:id", (req, res) => {
  UserCon.updateById(req, res);
});
router.get("/user/list", (req, res) => {
  UserCon.getUsers(req, res);
});
module.exports = router;
