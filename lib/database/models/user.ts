import {Schema,model,models} from 'mongoose';


const userSchema = new Schema({
    userId:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:[true,'Email is required'],      
        unique:[true,'Email already exists']
    },
    username:{
        type:String,
        required:[true,'Username is required'],
    },
    image:{
        type:String,
    }
},{
    timestamps: true
}
);

const User= models.user || model('user',userSchema);

export default User; 