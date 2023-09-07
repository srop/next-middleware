"use client"
import React from 'react'
import { redirect } from 'next/navigation';
import User from '../components/user';
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { increment } from "../../store/counterSlice";
const dashboard = (props: any) => {
  const dispatch = useAppDispatch()
  const counter = useSelector((state: any) => state.counter.count)
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>Add To Count</button>
    </div>

  )
}



export default dashboard
