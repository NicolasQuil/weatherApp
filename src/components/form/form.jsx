import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    // email,password,confirm password,fullname,birthdate
    return (
        <div className='d-flex justify-content-center'>

            <form className='col-lg-3 col-md-4 col-8 mt-5 shadow p-3 rounded-5'>
                <h1>Sign Up</h1>
                <label className='mt-2'>FullName:</label>
                <input className='form-control' type="text" />
                <label className='mt-2'>Email:</label>
                <input className='form-control' type="text" />
                <label className='mt-2'>Password:</label>
                <input className='form-control' type="password" />
                <label className='mt-2'>Confirm Password:</label>
                <input className='form-control' type="password" />
                <label className='mt-2'>Birthdate:</label>
                <input className='form-control text-center' type="date" />
                <button className='btn btn-primary mt-3 px-4 py-2'>Sign Up</button>
            </form>

        </div>
    )
}

export default Form