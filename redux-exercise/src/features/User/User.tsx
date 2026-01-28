import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { incrementAge, setFirstname, setLastname } from './UserSlice'

type Props = {}

const User = (props: Props) => {
    const {firstname, lastname, age} = useSelector((state:RootState)=>state.user)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div className='flex flex-col gap-12'>
        <div>
            <h2>Profile</h2>

            <ul>
                <li>First Name: {firstname}</li>
                <li>Last Name: {lastname}</li>
                <li>Age: {age}
                    <button
                    onClick={()=>dispatch(incrementAge())}>Increment Age</button>
                </li>
            </ul>
        </div>

        <div>
            <h2>Inputs Field</h2>
            <div>
                <label>First Name:</label>
                <input type="text"
                value={firstname}
                onChange={(e)=>dispatch(setFirstname(e.target.value))} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text"
                value={lastname}
                onChange={(e)=>dispatch(setLastname(e.target.value))} />
            </div>

        </div>

        

    </div>
  )
}

export default User