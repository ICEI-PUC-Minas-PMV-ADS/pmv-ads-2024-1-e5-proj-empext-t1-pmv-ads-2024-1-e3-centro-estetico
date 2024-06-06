import { api } from "@/lib/axios";

export async function getUsers(username: string | undefined | null) {
  if (!username || username === '') return await api.get('/get-users?username=');

  return await api.get(`/get-users?username=${username}`);

}
