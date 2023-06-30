import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../../entities/auth'
import { useNavigate } from 'react-router-dom'

const AuthHandler = () => {
    const token = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/accounts')
        } else {
            navigate('/auth')
        }
    }, [navigate])

    return null
}

export default AuthHandler
