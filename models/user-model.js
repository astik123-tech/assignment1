const mongoose = require('mongoose')

const userShema = mongoose.Schema({ 
    HeadId:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    age:{
        type:Number
    }, 
    phoneNumber:{
        type:Number
    },
    sallery:{
        type:Number
    },
    created_at: {
        type: String,
        default: new Date()
    },
    updated_at: {
        type: String,
        default: new Date()
    }
})

const users = mongoose.model('users', userShema)
module.exports=users