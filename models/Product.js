import { Schema, model } from "mongoose"

let collection = 'products'
let schema = new Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    img: {type:String, required: true},
    price: {type:Number, required: true},
    category: {type:String, required: true},
    catalogType: {type:String, required: true},
}, {
    timestamps: true
})

let Product = model(collection, schema)

export default Product
