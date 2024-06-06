import { getAppointmentsList } from "@/api/appointment";
import { useQuery } from "@tanstack/react-query";

export const useGetAppointmentList = (clientId: string) => {
  const query = useQuery({
    queryKey: ['appointmentList', clientId],
    queryFn:  () => getAppointmentsList(clientId),}
  );
  return query
}