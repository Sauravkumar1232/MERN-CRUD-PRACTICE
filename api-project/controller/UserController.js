const User = require("../model/User");

const create = async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  await user.save();
  res.status(200).send({
    success: true,
    message: "User created....",
    data: user,
  });
  console.log((err) => {
    res.status(200).send({
      success: false,
      message: "Error....",
    });
  });
  // console.log("user create");
  // console.log(req.body);
  // let user = new User(req.body);

  // await user.save();
  // console.log("usersave");
  // res.status(200).send({ success: true, message: "created..", data: user });

  //   res.status(500).send({ success: false, message: "..", data: "" });
};
const getById = async (req, res) => {
  console.log("getbyid");
  let id = req.params.id;
  let user = await User.findById({ _id: id });
  console.log(user);

  res.status(200).send({ success: true, message: "created..", data: user });
};
const deleteById = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "user id");

    let user = await User.deleteOne({ _id: id });
    res.status(200).send({
      success: true,
      message: "Deleted Success..",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error ",
      error,
    });
  }
};
// const deleteById = async (req, res) => {
//   let id = req.body.id;

//   let user = await User.deleteOne({ _id: id });
//   console.log("deele");

//   res.status(200).send({ success: true, message: "deleted..", data: "" });
// };
const updateById = async (req, res) => {
  let id = req.params.id;
  try {
    console.log(req.body, "payload");
    const { name, email, phone, password } = req.body;
    let user = await User.findById({ _id: id });
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    await user.save();
    res.status(200).send({ success: true, message: "updates..", data: "" });
  } catch {
    res.status(500).send({ success: false, message: "..", data: "" });
  }
};
const getUsers = async (req, res) => {
  let user = await User.find({});

  // console.log(user);
  res.status(200).send({
    success: true,
    message: "User Fetched....",
    data: user,
  });
  // res.end();
};
module.exports = {
  create,
  getById,
  deleteById,
  updateById,
  getUsers,
};
