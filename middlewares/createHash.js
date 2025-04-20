import bcryptjs from 'bcryptjs'

const hashPassword = (req,res,next) => {
    let password = req.body.password
    let hashPassword = bcryptjs.hashSync(password, 10)
    req.body.password = hashPassword
    return next()
}

export default hashPassword