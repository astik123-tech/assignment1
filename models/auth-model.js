const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const authSchema = mongoose.Schema({ 
    name:{
        type:String
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
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

authSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)  
        this.password = hashedPassword
        next()     
    } catch (error) {
        next(error)
    }
})



const auth = mongoose.model('auth', authSchema)
module.exports=auth

