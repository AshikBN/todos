const mongoose=require("mongoose");
const Schema = mongoose.Schema;



const postSchema=new Schema({

  
   activity:{
        type:String
    }

})

const Userpost=mongoose.model("Userpost",postSchema)

module.exports=Userpost