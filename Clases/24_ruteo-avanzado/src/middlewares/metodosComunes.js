export function metodosComunes(req, res, next) {
    // metodos para la respuesta
    res.addToken = token => {
        res.header('authorization', token)
    }
    res.sendSuccess = resultado => {
        res.json({ status: 'success', resultado })
    }
    res.sendClientError = error => {
        res.status(400).json({ status: 'error', error })
    }
    res.sendServerError = error => {
        res.status(500).json({ status: 'error', error })
    }
    res.sendAuthError = error => {
        res.status(401).json({ status: 'error', error: 'fallo la autenticación' })
    }
    res.sendPermissionError = error => {
        res.status(403).json({ status: 'error', error })
    }
    // metodos para la peticion
    req.extractToken = () => {
        const cabeceraAuth = req.headers.authorization
        if (!cabeceraAuth) return res['sendAuthError']()
        const token = cabeceraAuth.split(' ')[1]
        if (!token) return res['sendAuthError']()
        return token
    }
    next()
}