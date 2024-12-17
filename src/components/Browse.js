import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Trailer from './Trailer';

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
      <Trailer />
    </div>
  )
}
