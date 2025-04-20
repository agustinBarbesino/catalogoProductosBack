import { Router } from "express"
import signIn from "../controllers/Auth/signIn.js"
import signOut from "../controllers/Auth/signOut.js"
import passport from "passport"
import generateToken from "../middlewares/generateToken.js"
import isPasswordOk from "../middlewares/isPasswordOk.js"
import accountNoExists from "../middlewares/accountNoExists.js"

const authRouter = Router()

authRouter.post("/signIn", accountNoExists, isPasswordOk, generateToken, signIn)
authRouter.post("/signOut", passport.authenticate("jwt", {session: false}), signOut)

export default authRouter 