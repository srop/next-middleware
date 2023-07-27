
"use client"
import axios from '../../axios.config';
import * as React from "react";
import { useEffect, useState } from 'react'


export default function Homepage (){
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const url = "/api/users/1";

    axios
      .get(url)
      .then((response: any) => {
        // handle success
        setData(response.data);
      
        console.log(response.data);
       
      })
      .catch((error: any) => {
        // handle errors
      });
  }, []);

	return (
		<>
			<div className="Homepage">
      <h1>dsfsdf{JSON.stringify(data)}</h1>
				
			</div>
		</>
	)
}
