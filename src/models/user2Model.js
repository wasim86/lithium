const mongoose= require("mongoose")
const user2Schema = new mongoose.Schema({


    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    posts: {type: [], deafult: []},
    isDeleted:{type:String,deafult:false}
}, { timestamps: true });

module.exports= mongoose.model("User4", user2Schema)