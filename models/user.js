import {Schema,model} from 'mongoose'

const UserSchema =new Schema({
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
})

const User=model('User',UserSchema)
export default User;