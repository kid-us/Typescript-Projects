import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
    http = axios.create({
        baseURL: ' https://jsonplaceholder.org/'
        // https://jsonplaceholder.org/comments
    })

    async getReminders() {
      const response =  await this.http.get<Reminder[]>('/comments')
        return response.data;
    }

    async addReminder(title: string){
       const response =  await this.http.post<Reminder>(title);
        return response.data;
    }

    async removeReminder(id: number){
       const response = await this.http.delete(`comments/${id}`);
       return response;
    }
}

export default new ReminderService();