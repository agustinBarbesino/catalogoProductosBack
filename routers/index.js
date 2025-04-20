import { Router } from "express";
import productRouter from "./products.js"
import authRouter from "./auth.js"
import userRouter from "./users.js"

const indexRouter = Router()

indexRouter.use('/products', productRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/users', userRouter)              

export default indexRouter