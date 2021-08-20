import React from 'react'
import { useState } from 'react'
import { useMutation } from 'urql'
import { LOGIN_USER } from '../../graphql/loginUser'

interface User {
    username: string
    password: string
}

export function Login() {
    const [user, setUser] = useState({ username: '', password: '' })
    const [, loginUser] = useMutation<any, User>(LOGIN_USER)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { value, name } = e.target
        setUser((u) => ({ ...u, [name]: value }))
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await loginUser(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ color: 'black' }}
                    type='text'
                    onChange={handleChange}
                    placeholder='Username'
                    name='username'
                    value={user.username}
                />
                <input
                    style={{ color: 'black' }}
                    type='password'
                    onChange={handleChange}
                    placeholder='Password'
                    name='password'
                    value={user.password}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
