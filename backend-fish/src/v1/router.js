const { Router } = require(`express`);
const {
  FishController,
  UserController,
  AuthController,
} = require(`./controllers`);
const {
  authMiddleware,
} = require(`v1/middlewares`);

// Auth
const authRouter = Router();
authRouter.post(`/login`, AuthController.login);

// Users
const usersRouter = Router();
usersRouter.post(`/`, UserController.store);

// Fishes
const fishesRouter = Router();
fishesRouter.use(authMiddleware);
fishesRouter.get(`/`, FishController.index);
fishesRouter.get(`/:id`, FishController.show);
fishesRouter.post(`/`, FishController.store);
fishesRouter.put(`/:id`, FishController.update);
fishesRouter.delete(`/:id`, FishController.destroy);

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