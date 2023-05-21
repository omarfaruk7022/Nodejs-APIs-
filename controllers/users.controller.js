let users = [
  {
    id: 1,
    gender: "Male",
    name: "John Doe",
    contact: "1234567890",
    address: "123, ABC Street, XYZ City",
    photoUrl:
      "https://images.unsplash.com/photo-1684287038326-3700007a3072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 2,
    gender: "Male",
    name: "John",
    contact: "1234567890",
    address: "123, ABC Street, XYZ City",
    photoUrl:
      "https://images.unsplash.com/photo-1684287038326-3700007a3072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 3,
    gender: "Female",
    name: "jorina",
    contact: "1234567890",
    address: "123, ABC Street, XYZ City",
    photoUrl:
      "https://images.unsplash.com/photo-1684287038326-3700007a3072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 4,
    gender: "Male",
    name: "Ahmad",
    contact: "1234567890",
    address: "123, ABC Street, XYZ City",
    photoUrl:
      "https://images.unsplash.com/photo-1684287038326-3700007a3072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
];

module.exports.getAllUsers = (req, res, next) => {
  console.log(req.path);
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
  res.status(404).json({
    status: "fail",
    message: "Not found",
  });
};
module.exports.getRandomUsers = (req, res, next) => {
  const id = Math.floor(Math.random() * users.length);
  const user = users[id];
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

module.exports.getUserById = (req, res, next) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

module.exports.createUser = (req, res, next) => {
  users.push(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: req.body,
    },
  });
};
module.exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const newUser = users.find((user) => user.id === Number(id));
  newUser.name = req.body.name;
  newUser.id = Number(id);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

module.exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  const newUser = users.filter((user) => user.id !== Number(id));
  users = newUser;
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};


