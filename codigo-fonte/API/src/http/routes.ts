import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { clientById } from "./controllers/client-by-id";
import { clientRegister } from "./controllers/client-register";
import { clients } from "./controllers/clients";
import { createAppointment } from "./controllers/create-appointment";
import { createHealthQuestionnaire } from "./controllers/create-health-questionnaire";
import { getAppointment } from "./controllers/get-appointment";
import { healthQuestionnaireByClientId } from "./controllers/get-health-questionnaire-by-client-id";
import { getSkinForm } from "./controllers/get-skin-form";
import { getUsers } from "./controllers/get-users";
import { skinForm } from "./controllers/skin-form";
import { updateSkinForm } from "./controllers/update-skin-form";
import { userProfile } from "./controllers/user-profile";
import { userRegister } from "./controllers/user-register";
import { verifyJWT } from "./middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance) {
  // Clients Routes
  app.get("/clients", clients);
  app.post("/users", userRegister);
  app.post("/sessions", authenticate);

  app.post("/clients", clientRegister);
  app.get("/clientById", clientById);


  // SkinForm Routes
  app.get("/get-skin-form", getSkinForm );
  app.post("/skin-form", skinForm);
  app.put("/update-skin-form", updateSkinForm);

  // Users Routes
  app.get("/user", userProfile);
  app.get("/get-users", getUsers);

  // Authenticated Routes
  app.get("/me", { onRequest: [verifyJWT] }, userProfile);

  // app.get('/users', { onRequest: [verifyJWT] }, users)
  app.get("/appointment", getAppointment);
  // app.get("/appointments-list", getAllAppointments); // frontendEsperando este cara

  app.post("/appointments", { onRequest: [verifyJWT] }, createAppointment);

  app.post('/health-questionnairies', createHealthQuestionnaire)
  app.get("/healthQuestionnaireByClientId", healthQuestionnaireByClientId);

}
