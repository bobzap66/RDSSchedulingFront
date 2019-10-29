import { LoginCredentials } from './loginPost';
import { Organization } from './organization';

export class Membership{
    account:LoginCredentials;
    organization:Organization;
    type:string;
}