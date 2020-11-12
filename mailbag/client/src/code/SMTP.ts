// Library imports.
import axios from "axios";

// App imports.
import { config } from "./config";

// The worker that will perform SMTP operations.
export class Worker {
    // Send a message via SMTP.
    public async sendMessage(
        inTo: string,
        inFrom: string,
        inSubject: string,
        inMessage: string
        ): Promise<void> {

        console.log("SMTP.Worker.sendMessage()");

        await axios.post(`${config.serverAddress}/messages`, {
            to : inTo,
            from : inFrom,
            subject : inSubject,
            text : inMessage
            }
        );
    } /* End sendMessage(). */
} /* End class. */