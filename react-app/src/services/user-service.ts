import apiClients from "./api-clients";

export interface User {
    id: number;
    name: string;
  }

class UserServices {
    getAllUsers () {
        const controller = new AbortController();
        const request = apiClients
        .get<User[]>("/users", {
          signal: controller.signal,
        })


        return {request, cancel:()=> controller.abort()}
    }


    deleteUser (id: number) {
        return apiClients.delete("/users/" + id)
    }

    addUser (newUser: User){
        return apiClients
        .post("/users", newUser)
    }

    updateUser (id: number, updatedUser: User){
        return apiClients.patch("/users/" + id, updatedUser)
    }
}

export default new UserServices();