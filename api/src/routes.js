const express = require('express');
const routes = express.Router();
const multer = require('multer');

const UserController = require('./controllers/UserController');
const GroupController = require('./controllers/GroupController');
const TrainingController = require('./controllers/TrainingController');
const StudentController = require('./controllers/StudentController');

const upload = multer({
  dest: "./tmp"
});

routes.get("/students", StudentController.index);
routes.post("/students", upload.single("file"), StudentController.create);
routes.put("/students/:id", StudentController.update);
routes.delete("/students/:id", StudentController.delete);

routes.get("/trainings", TrainingController.index);
routes.post("/trainings", TrainingController.create);
routes.put("/trainings/:id", TrainingController.update);
routes.delete("/trainings/:id", TrainingController.delete);

routes.get("/groups", GroupController.index);
routes.post("/groups", GroupController.create);
routes.put("/groups/:id", GroupController.update);
routes.delete("/groups/:id", GroupController.delete);

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;