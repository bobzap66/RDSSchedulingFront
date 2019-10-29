import { LoginCredentials } from './loginPost';
import { MorganizeEvent } from './morganizeEvent';

export class Appointment{
    account:LoginCredentials;
    event:MorganizeEvent;
    type:string;
}