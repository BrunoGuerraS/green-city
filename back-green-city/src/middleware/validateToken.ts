import jwt from 'jsonwebtoken'
import config from '../config'

export const authRequire = (req: any, res: any, next: any) => {
    const token = req.cookies.jwt
    console.log(token)
    if(!token) return res.status(401).json({message: 'Unauthorized'})
    jwt.verify(token, config.jwtSecret, (err: any, decoded: any) => {
        if (err) return res.status(401).json({message: 'Unauthorized'})
        console.log(decoded)
        next()
    })
}