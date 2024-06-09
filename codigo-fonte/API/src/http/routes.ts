import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { clientById } from "./controllers/client-by-id";
import { clientRegister } from "./controllers/client-register";
import { clients } from "./controllers/clients";
import { createAppointment } from "./controllers/create-appointment";
import { createAppointmentSkinData } from "./controllers/create-appointment-skin-data";
import { getAppointmentSkinData } from "./controllers/get-appointment-skin-data";
import { getAppointmentBodyData } from "./controllers/get-appointment-body-data";
import { createAppointmentBodyData } from "./controllers/create-appointment-body-data";
import { createHealthQuestionnaire } from "./controllers/create-health-questionnaire";
import { getAppointment } from "./controllers/get-appointment";
import { deleteAppointment } from "./controllers/delete-appointment";
import { deleteAppointmentSkinData } from "./controllers/delete-appointment-skin-data";
import { deleteAppointmentBodyData } from "./controllers/delete-appointment-body-data";
import { getLastBodyAppointment } from "./controllers/get-last-body-appointment";
import { healthQuestionnaireByClientId } from "./controllers/get-health-questionnaire-by-client-id";
import { recentHealthQuestionnairies } from "./controllers/get-recent-health-questionnaire";
import { getSkinForm } from "./controllers/get-skin-form";
import { getUsers } from "./controllers/get-users";
import { skinForm } from "./controllers/skin-form";
import { updateSkinForm } from "./controllers/update-skin-form";
import { userProfile } from "./controllers/user-profile";
import { userRegister } from "./controllers/user-register";
import { verifyJWT } from "./middlewares/verify-jwt";
import { getAppointmentsByClient } from "./controllers/get-appointments-by-client";
import { getHealthQuestionnaireLink } from "./controllers/get-health-questionnaire-link";

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

  // Appointment Routes
  app.get("/appointment", getAppointment);
  app.post("/appointments", { onRequest: [verifyJWT] }, createAppointment);
  app.post("/appointment-skin-data", createAppointmentSkinData);
  app.post("/appointment-body-data", createAppointmentBodyData);
  app.get("/client-appointments/:id", getAppointmentsByClient);

  app.get("/appointment-skin-data", getAppointmentSkinData);
  app.get("/appointment-body-data", getAppointmentBodyData);
  app.get("/last-body-appointment", getLastBodyAppointment);

  app.delete("/appointment", deleteAppointment);
  app.delete("/appointment-skin-data", deleteAppointmentSkinData);
  app.delete("/appointment-body-data", deleteAppointmentBodyData)
  // app.get("/appointments-list", getAllAppointments); // frontendEsperando este cara

  // Health Questionnaire Routes
  app.get('/health-questionnaire-link/:id', getHealthQuestionnaireLink)
  app.post('/health-questionnairies', createHealthQuestionnaire)
  app.get("/healthQuestionnaireByClientId", healthQuestionnaireByClientId);
  app.get("/recent-health-questionnaries", recentHealthQuestionnairies);
  


}
