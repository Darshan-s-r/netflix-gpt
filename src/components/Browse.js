import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import store from "../utils/AppStore"
import { useNavigate } from 'react-router-dom';


export default function Browse() {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  console.log("body")
  return (
    <div>
      <Header />
    </div>
  )
}
