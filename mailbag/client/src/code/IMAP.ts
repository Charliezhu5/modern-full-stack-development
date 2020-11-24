// Library imports.
import axios, { AxiosResponse } from "axios";

// App imports.
import { config } from "./config";

// Define interface to describe a mailbox.
export interface IMailbox { name: string, path: string }

// Define interface to describe a received message.  Note that body is 
// optional since it isn't sent when listing messages.
export interface IMessage {
    id: string,
    date: string,
    from: string,
    subject: string,
    body?: string
  }

export class Worker {
    // Return list of mailboxes.
    public async listMailboxes(): Promise<IMailbox[]> {

        console.log("IMAP.Worker.listMailboxes()");

        const response: AxiosResponse = await axios.get(`${config.serverAddress}mailboxes`);
        return response.data;

    } /* End listMailboxes(). */

    // Return list of messages in the param mailbox.
    public async listMessages(inMailbox: string): Promise<IMessage[]> {

        console.log("IMAP.Worker.listMessages()");

        const response: AxiosResponse = await axios.get(`${config.serverAddress}mailboxes/${inMailbox}`);
        return response.data;

    } /* End listMessages(). */

    // Return a specified message body.
    public async getMessageBody(inID: string, inMailbox: String): Promise<string> {

        console.log("IMAP.Worker.getMessageBody()", inID);

        const response: AxiosResponse = await axios.get(`${config.serverAddress}messages/${inMailbox}/${inID}`);
        return response.data;

    } /* End getMessageBody(). */

    // Delete a specified message.
    public async deleteMessage(inID: string, inMailbox: String): Promise<void> {

        console.log("IMAP.Worker.getMessageBody()", inID);

        await axios.delete(`${config.serverAddress}messages/${inMailbox}/${inID}`);

    } /* End deleteMessage(). */
} /* End class. */