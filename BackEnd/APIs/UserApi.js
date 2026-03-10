import exp from "express";
import { UserModel } from "../Models/UserModel.js";
//create min-express app
export const UserApp =exp.Router();
//User API routes


//create User
UserApp.post("/user",async(req,res)=>{

    //create new user
    const newUser = req.body;
    //create new userdocument
    const newUserDocument = new UserModel(newUser);

    //save the user
    await newUserDocument.save();
    //send res
    res.status(201).json({message:"User created successfully",user:newUserDocument})

})
//Read all Users
UserApp.get("/user",async(req,res)=>{
    //get all users
    const users = await UserModel.find({status:true});
    //send res
    
    res.status(200).json({message:"Users fetched successfully",payload:users})
})
// Read user by ID
UserApp.get("/user/:id", async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user){
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User fetched successfully", payload:user });
});

  // Delete user by ID  (soft delete)
UserApp.delete("/user/:id", async (req, res) => {
    let user = await UserModel.findByIdAndUpdate(req.params.id, { status: false });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
});

//activate user (change status to true)
UserApp.patch("/user/:id", async (req, res) => {
    let user = await UserModel.findByIdAndUpdate(req.params.id, { status: true },{new:true});
    res.status(200).json({ message: "User activated successfully",payload:user });
});
//PUT & PATCH


//update user by id