const Student=require("../Model/studentModel");

const views=async(req,res)=>{
    try{
        const result=await Student.find();
        res.render("viewStudent",{
            data:result
        })
    }
    catch(error){
      console.log("Error")
    }

}

const Add=(req,res)=>{
    res.render("createStudent");
}

const createProcess=(req,res)=>{
    try{
        const results=new Student({
            name:req.body.name,
            email:req.body.email,
            city:req.body.city
        })
        const datas=results.save();
        datas.then(()=>{
            console.log("creation is successful!");
            res.redirect("/")
        })
        .catch(()=>{
            res.redirect("/creation");
        })
    }    
    catch(error){
        console.log("Error");
    }
}

const edit=async(req,res)=>{
    try{
        const result=await Student.findById(req.params.id);
        res.render("editStudent",{
            data:result
        })
    }
    catch(error){
        console.log("Error");
    }

}

const update=async(req,res)=>{
    try{
        const result=Student.findByIdAndUpdate(req.body.id,req.body,{new:true});
        result.then(()=>{
            console.log("Edition is SuccessFul!");
            res.redirect("/");
        })
    }
    catch(error){
        console.log("error");
    }
}

const deletion=(req,res)=>{
    try{
        const result=Student.findByIdAndDelete(req.params.id);
        result.then(()=>{
            console.log("Deletion isSuccessFul!");
            res.redirect("/");
        })
    }
    catch(error){
        console.log("error");
    }
}

module.exports={views,Add,createProcess,edit,update,deletion};