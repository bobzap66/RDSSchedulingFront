import { Account } from './loginPost';
import { MorganizeEvent } from './morganizeEvent';

export class Appointment{
    account:Account;
    event:MorganizeEvent;
    attending:boolean;
    admin:boolean;
}