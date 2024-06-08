import { getAppointmentsList } from "@/api/appointment";
import { useQuery } from "@tanstack/react-query";

export const useGetAppointmentList = (clientId: string) => {
  const query = useQuery({
    queryKey: ["appointments", clientId],
    queryFn: async () => {
      const response = await getAppointmentsList(clientId);
      return response.data;
    },
  });
  return query;
};
