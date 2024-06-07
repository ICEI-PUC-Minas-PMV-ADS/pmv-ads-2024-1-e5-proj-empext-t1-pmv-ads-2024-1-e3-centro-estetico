import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { clientRegister } from "./controllers/client-register";
import { clients } from "./controllers/clients";
import { createAppointment } from "./controllers/create-appointment";
import { createAppointmentSkinData } from "./controllers/create-appointment-skin-data";
import { createAppointmentBodyData } from "./controllers/create-appointment-body-data";
import { createHealthQuestionnaire } from "./controllers/create-health-questionnaire";
import { skinForm } from "./controllers/skin-form";
import { userProfile } from "./controllers/user-profile";
import { userRegister } from "./controllers/user-register";
import { verifyJWT } from "./middlewares/verify-jwt";
import { getUsers } from "./controllers/get-users";
import { getAppointment } from "./controllers/get-appointment";
import { clientById } from "./controllers/client-by-id";

export async function appRoutes(app: FastifyInstance) {
  app.get("/clients", clients);
  app.post("/users", userRegister);
  app.post("/sessions", authenticate);

  app.post("/clients", clientRegister);
  app.get("/clientById", clientById);
  app.post("/skin-form", skinForm);
  app.get("/user", userProfile);
  app.get("/get-users", getUsers);

  // Authenticated Routes
  app.get("/me", { onRequest: [verifyJWT] }, userProfile);
  // app.get('/users', { onRequest: [verifyJWT] }, users)
  app.get("/appointment", getAppointment);

  app.post("/appointments", { onRequest: [verifyJWT] }, createAppointment);
  app.post("/appointment-skin-data", createAppointmentSkinData);
  app.post("/appointment-body-data", createAppointmentBodyData);

  app.post('/health-questionnairies', createHealthQuestionnaire)
}
