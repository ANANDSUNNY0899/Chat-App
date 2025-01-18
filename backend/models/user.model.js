// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     fullName:{
//         type:String,
//         required:true,
//         // unique: true,
//     },
//     username:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:6,
//     },
//     gender:{
//         type:String,
//         required:true,
//         enum:["male","female"],
//     },
//     profilePis:{
//         type:String,
//         default: "",
//     },
// });

// const User = mongoose.model("User", userSchema);
// export default User; 





import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: { // Corrected from `usename` to `username`
        type: String,
        required: true,
        unique: true, // Ensures no two users have the same username
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Enforces a minimum password length
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"], // Ensures gender is either "male" or "female"
    },
    profilePic: { // Corrected from `profilePis` to `profilePic`
        type: String,
        default: "", // Sets a default value for profile pictures
    },
    
    //creatredAt, UpdatedAt
},{ timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
