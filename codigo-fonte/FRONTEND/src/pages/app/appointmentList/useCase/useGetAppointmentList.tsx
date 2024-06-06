import { getAppointmentList } from "@/api/appointment";
import { useQuery } from "@tanstack/react-query";

export const useGetAppointmentList = (clientId: string) => {
const query = useQuery({
  queryKey: ['appointmentList', clientId],
  queryFn:  () => getAppointmentList(clientId),}
);
return query
}