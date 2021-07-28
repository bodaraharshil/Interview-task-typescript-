import {model,Schema} from 'mongoose';
import Admin from '../types/user';

const newuserschema=new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
    },
});

module.exports=model<Admin>("user",newuserschema);