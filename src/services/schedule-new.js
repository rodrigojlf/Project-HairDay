import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        id: id.toString(), 
        name, 
        when 
      })
    })

    alert("Agendado com sucesso!")

  } catch (error) {
    alert("Não foi possível agendar. Tente novamente mais tarde.")
    console.log(error) 
  }
}