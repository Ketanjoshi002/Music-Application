const URL = 'mongodb+srv://music-app:hello@cluster0.e6d1jqo.mongodb.net/userdb?retryWrites=true&w=majority';
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
export default mongoose;