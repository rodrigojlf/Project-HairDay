import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })
    alert("Agendamento cancelado com sucesso!");
    
  } catch (error) {
    console.error(error);
    alert("Houve um erro ao cancelar o agendamento. Tente novamente mais tarde.");
  }
}