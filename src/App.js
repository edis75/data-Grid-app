import React, { useEffect, useState } from 'react'
import './App.css';
import ContruiesTable from './Component/Countries.jsx';
import Navbar from './Component/navbar.jsx';
import Modal from './Component/Modal.js';
function App() {
 const [show,setShow]=useState(false);
  return (
    <>
    <div className="d-flex flex-column align-items-center">
    
    </div>
    <Navbar/>
      <div className="button-container">
        <button onClick={() => setShow(true)} class="show-modal">+ Yeni Hesap Ekle</button>
      </div>
    <Modal onClose={()=>setShow(false)} show={show}/>
    <div class="table-container">
    <ContruiesTable/>
    </div>
    
   
    
    </>
  );
}

export default App;
