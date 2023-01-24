import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import AdminSeparator from '../../../src/component/AdminSeparator';
import { firebaseSignIn } from '../../../src/service/firebase_utils';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1000));
}

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoad] = useState(false)
    const router = useRouter()
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };

    const handlePass = (event) => {
        setPass(event.target.value)
    };

    async function loginFirebase({ email, password }) {
        setLoad(true)
        await sleep(1000)
        let result = await firebaseSignIn({ email, password })
        setLoad(false)
        if (result) {
            setLoad(true)
            router.push('/admin')
        } else {
            await sleep(100)
            alert('email/password salah')
        }
    }

    const login = () => {
        loginFirebase({ email, password: pass })
    }

    function keyPress(e){
        if (e.keyCode == 13) {
            login()
        }
    }

    return <div className='row'>
        <div className='col-3' />
        <div className='col-6 text-center'>
            <AdminSeparator />
            <h3 className='mb-3'>Login</h3>
            <TextField
                className='mb-3'
                onChange={handleEmail}
                label="Email"
                variant="outlined"
                fullWidth />
            <TextField
                className='mb-3'
                onChange={handlePass}
                onKeyDown={keyPress}
                label="Password"
                type={'password'}
                variant="outlined"
                fullWidth />
            <Button
                onClick={login}
                className='mr-3'
                variant="contained">
                {loading ? <CircleLoader color='#FFFFFF' size={25} /> : 'Login'}
            </Button>
        </div>
        <div className='col-3' />
    </div>
}