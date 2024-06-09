import { useNavigate, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import ArrowRight from "./assets/arrow.svg";
import Calendar from "./assets/calendar.svg";
import Time from "./assets/Time.svg";
import { useTitle } from "@/hooks/useTitle";
import { useGetAppointmentList } from "./useCase/useGetAppointmentList";

const AppointmentsList = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { data, isLoading, error } = useGetAppointmentList(clientId ?? "");
  const navigate = useNavigate();
  const { setTitle } = useTitle();

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title);
    navigate(path);
  };

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("pt-BR");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading appointments</div>;
  }

  function AppointmentTypeDisplayer(appointmentType: string | undefined) {
    switch (appointmentType) {
      case 'Hair':
        return 'Capilar'
      case 'Body':
        return 'Corporal'
      case 'Skin':
        return 'Facial'
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 rounded-xl bg-input p-5">
      <h1 className="pl-3 text-lg font-semibold ">Histórico de Consultas</h1>
      {data?.appointments.map((item: any) => (
        <div key={item.id}>
          <div
            className="mr-4 inline-block h-20 w-72 rounded-md border-primary border-2 bg-white text-sm shadow-sm"
            onClick={() =>
              navigateUpdatingHeader(
                `/history-appointment/${item.id}`,
                item.specialty,
              )
            }
          >
            <div className="ml-2 mr-2">
              <div className="mb-2 flex justify-between font-bold">
                <div className="mb-4 mt-2 flex">
                  {" "}
                  <ReactSVG src={Calendar} />{" "}
                  {formatDate(item.appointment_date)}{" "}
                </div>
                <ReactSVG src={ArrowRight} className="" />
              </div>
              <div className="mb-2 flex justify-between">
                <div className="flex">
                  {" "}
                  <ReactSVG src={Time} />
                  {item.appointment_hour}{" "}
                </div>
                <div> {AppointmentTypeDisplayer(item.appointment_type)} </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;
