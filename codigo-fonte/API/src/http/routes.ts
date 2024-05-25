import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { clientRegister } from "./controllers/client-register";
import { clients } from "./controllers/clients";
import { createAppointment } from "./controllers/create-appointment";
import { createHealthQuestionnaire } from "./controllers/create-health-questionnaire";
import { skinForm } from "./controllers/skin-form";
import { userProfile } from "./controllers/user-profile";
import { userRegister } from "./controllers/user-register";
import { verifyJWT } from "./middlewares/verify-jwt";
import { getUsers } from "./controllers/get-users";

export async function appRoutes(app: FastifyInstance) {
  app.get("/clients", clients);
  // app.post('/clients', clientRegister)

  app.post("/users", userRegister);
  app.post("/sessions", authenticate);

  app.post("/clients", clientRegister);
  app.post("/skin-form", skinForm);
  app.get("/user", userProfile);
  app.get("/get-users", getUsers);
  app.post("/health-questionnairies", createHealthQuestionnaire);
  app.post("/appointments", createAppointment);

  // Authenticated Routes
  app.get("/me", { onRequest: [verifyJWT] }, userProfile);
  // app.get('/users', { onRequest: [verifyJWT] }, users)
}
