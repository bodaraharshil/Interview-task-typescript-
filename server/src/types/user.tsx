import mongoose,{Document} from 'mongoose';


export interface token {
    token:string;
}

export interface Admin extends Document{
    first_name:string;
    last_name:string;
    email:string;
    role:string;
}


