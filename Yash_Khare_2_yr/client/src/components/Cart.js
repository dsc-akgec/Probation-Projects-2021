import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
        const history = useNavigate()
    
        const callProfilePage = async () =>{
            try{
                const res = await fetch("/profile",{
                    method  :"GET",
                    headers : {
                        Accept : "application/json",
                        "Content-Type" : "application/json"
                    },
                    credentials : 'include'
                })
    
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw  error;
                }    
            }catch(err){
                console.log(err);
                history("/login")
            }
        }
    
        useEffect(()=>{
            callProfilePage()
        })
    return (
        <div>
            <h1>Your Cart</h1>
        </div>
    )
}

export default Cart
