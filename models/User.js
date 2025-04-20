import { Schema, model } from "mongoose"

let collection = 'users'
let schema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    inLine: {type:Boolean}
}, {
    timestamps: true
})

let User = model(collection, schema)

export default User