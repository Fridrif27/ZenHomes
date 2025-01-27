import {auth} from "express-oauth2-jwt-bearer"

const jwtCheck = auth({
    audience: 'http://localhost:3000',
    issuerBaseURL: 'https://dev-wiskq76a0zsthlqy.us.auth0.com',
    tokenSigningAlg: 'RS256',
})

export default jwtCheck