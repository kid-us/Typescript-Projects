import apiClients from "./api-clients";

interface Entity {
    id: number;
}

class HttpServices {

    constructor(public endpoint: string){};

    getAll<T> () {
        const controller = new AbortController();
        const request = apiClients
        .get<T[]>(this.endpoint, {
          signal: controller.signal,
        })


        return {request, cancel:()=> controller.abort()}
    }


    delete (id: number) {
        return apiClients.delete(this.endpoint + "/" + id)
    }

    add<T> (newUser: T){
        return apiClients
        .post(this.endpoint, newUser)
    }

    update<T extends Entity> (updatedUser: T){
        return apiClients.patch( this.endpoint+"/" + updatedUser.id, updatedUser)
    }
}

const create = (endpoint: string) =>{ new HttpServices(endpoint)}

export default create;