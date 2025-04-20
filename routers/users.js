import { Router } from "express"
import signUp from "../controllers/User/create.js"
import { allUsers, userByEmail } from "../controllers/User/read.js"
import updateUser from "../controllers/User/update.js"
import {  deleteOne, deleteMany } from "../controllers/User/delete.js"
import passport from "../middlewares/passport.js"
import hashPassword from "../middlewares/createHash.js"
import accountExists from "../middlewares/accountExists.js"


const userRouter = Router()

userRouter.get("/all", passport.authenticate('jwt',{session:false}), allUsers)
userRouter.get("/email", passport.authenticate('jwt',{session:false}), userByEmail)
userRouter.post("/signUp", accountExists, hashPassword, signUp)
userRouter.put("/update", passport.authenticate("jwt", {session: false}), updateUser)
userRouter.delete("/deleteOne", passport.authenticate("jwt", {session: false}), deleteOne)
userRouter.delete("/deleteMany", passport.authenticate("jwt", {session: false}), deleteMany)
userRouter.get("/validateToken", passport.authenticate('jwt',{session:false}), allUsers)

export default userRouter