const mongoose=require('mongoose');
const schema=mongoose.Schema;
const studentSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const studentModel=mongoose.model('students',studentSchema);
module.exports=studentModel;