import { getSkinForm } from "@/api/clientsForm";
import { useQuery } from "@tanstack/react-query";

export const useGetSkinForm = (clientId: string) => {
const query = useQuery({
  queryKey: ['skinForm', clientId],
  queryFn:  () => getSkinForm(clientId),}
);
return query
}