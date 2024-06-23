import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/authenticate";
import { clientById } from "./controllers/client-by-id";
import { clientRegister } from "./controllers/client-register";
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
import { getEstheticians} from "./controllers/get-estheticians";
import { getAppointmentsByClient } from "./controllers/get-appointments-by-client";
import { getHealthQuestionnaireLink } from "./controllers/get-health-questionnaire-link";
import { deleteHealthQuestionnaire } from "./controllers/delete-health-questionnaire";

export async function appRoutes(app: FastifyInstance) {
  // Users Routes
  app.post("/sessions", authenticate);
  app.post("/users", userRegister);
  app.get("/user", userProfile);
  app.get("/get-users", getUsers);
  app.get("/get-estheticians", getEstheticians);
  // Authenticated Routes
  app.get("/me", { onRequest: [verifyJWT] }, userProfile);

  // Clients Routes
  app.post("/clients", clientRegister);
  app.get("/clientById", clientById);

  // SkinForm Routes
  app.get("/get-skin-form", getSkinForm );
  app.post("/skin-form", skinForm);
  app.put("/update-skin-form", updateSkinForm);

  // Appointment Routes
  app.get("/appointment", getAppointment);
  app.post("/appointments", createAppointment);
  app.post("/appointment-skin-data", createAppointmentSkinData);
  app.post("/appointment-body-data", createAppointmentBodyData);
  app.get("/client-appointments/:id", getAppointmentsByClient);

  app.get("/appointment-skin-data", getAppointmentSkinData);
  app.get("/appointment-body-data", getAppointmentBodyData);
  app.get("/last-body-appointment", getLastBodyAppointment);

  app.delete("/appointment", deleteAppointment);
  app.delete("/appointment-skin-data", deleteAppointmentSkinData);
  app.delete("/appointment-body-data", deleteAppointmentBodyData)

  // Health Questionnaire Routes
  app.get("/health-questionnaire-link/:id", getHealthQuestionnaireLink)
  app.post("/health-questionnairies", createHealthQuestionnaire)
  app.get("/health-questionnaire-by-client-id", healthQuestionnaireByClientId);
  app.get("/recent-health-questionnaries", recentHealthQuestionnairies);
  app.delete("/health-questionnaire", deleteHealthQuestionnaire);
}
