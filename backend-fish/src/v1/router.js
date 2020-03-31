const { Router } = require(`express`);
const {
  FishController,
  UserController,
  AuthController,
} = require(`./controllers`);

// Auth
const authRouter = Router();

// Users
const usersRouter = Router();
usersRouter.get(`/`, UserController.index);
// usersRouter.get(`/:id`, UserController.show);
usersRouter.post(`/`, UserController.store);
// usersRouter.put(`/:id`, UserController.update);

// Fishes
const fishesRouter = Router();
fishesRouter.get(`/`, FishController.index);
// fishesRouter.get(`/:id`, FishController.show);
// fishesRouter.post(`/`, FishController.store);
// fishesRouter.put(`/:id`, FishController.update);
// fishesRouter.delete(`/:id`, FishController.destroy);


module.exports = [
  {
    prefix: `/auth`,
    router: authRouter,
  },
  {
    prefix: `/users`,
    router: usersRouter,
  },
  {
    prefix: `/fishes`,
    router: fishesRouter,
  },
];