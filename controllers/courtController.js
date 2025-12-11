import Court from '../models/Court.js'

export const getCourts=async(req,res)=>{
    try{

        const court= await Court.find()
        res.status(201).json(court)
    }catch(err){
        res.status(500).json({ message: "Error fetching courts", error: err })
    }

}
//admin post

export const sendCourtdata=async(req,res)=>{
    try{
        const{name,type,basePrice}=req.body
        const sending=new Court(
            {name,type,basePrice}
        );
        await sending.save();
        res.status(201).json(sending);
    }catch (err) {
        res.status(500).json({ message: "Error creating court", error: err });
      }
}
// admin put
export const  editCourtdata=async(req,res)=>{
    try{
        const court=await Court.findByIdAndUpdate(req.params.id,req.body,{new:true,})
        if(!court){
            res.status(404).json({message:"Court Not Found"})
        }
        res.status(201).json(court)
    }catch(err){
        res.status(500).json({message:"Error updating",error:err})
    }
}
// admin delete
export const deleteCourtdata=async(req,res)=>{
    try{
        const court=await Court.findByIdAndDelete(req.params.id)
        if(!court){
            res.status(404).json({message:"Court Not Found"})
        }
        res.status(201).json({message:"Successfully Deleted"})
    }catch(err){
        res.status(500).json({message:"Error Deleting",error:err})
    }
}