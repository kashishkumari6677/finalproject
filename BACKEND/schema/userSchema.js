const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
mongoose.connect('mongodb://127.0.0.1:27017/restuarent')
const userSchema=new mongoose.Schema({

fullname:{
    type:String
},
email:{
    type:String
},
password:{
    type:String
},
otpnum:{
    type:String
},
isVerify:{
    type:Boolean
}
})
userSchema.pre('save',async function(next){
    const create=this
    console.log(create)
    if(!create.isModified("password")){
       next()
    }
    try {
       const salt=await bcrypt.genSalt(10)
       const hash=await bcrypt.hash(create.password,salt)
       create.password=hash
    } catch (error) {
       
    }
 })
 module.exports=mongoose.model('user',userSchema)