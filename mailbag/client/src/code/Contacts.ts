  // Library imports.
import axios, { AxiosResponse } from "axios";
import { IconButton } from "material-ui";

// App imports.
import { config } from "./config";

// Define interface to describe a contact.  Note that we'll only have an _id field when retrieving or adding, so
// it has to be optional.
export interface IContact {
    _id?: number,
    name: string,
    email: string
}

// Worker class.
export class Worker {

    public async listContacts(): Promise<IContact[]> {
        const response: AxiosResponse =
            await axios.get(`${config.serverAddress}/contacts`);
        return response.data;
    }

    public async addContact(inContact: IContact): Promise<IContact> {
        const response: AxiosResponse = 
            await axios.post(`${config.serverAddress}/contacts`, inContact);
        return response.data;
    }

    public async deleteContact(inID): Promise<void> {
        const response: AxiosResponse = 
            await axios.delete(`${config.serverAddress}/contacts/${inID}`);
    }

    public async updateContact(inID, inContact: IContact): Promise<IContact> {
        const response: AxiosResponse = 
            await axios.put(`${config.serverAddress}/contacts/${inID}`, inContact);
        return response.data;
    }
}