import mongoose from "mongoose";

let url = process.env.URI_MONGO

async function connectDataBase() {
    try{
        await mongoose.connect(url)
        console.log("Base de datos conectada!");
        
    } catch (error) {
        console.log(error);
        
    }
}

connectDataBase()