import React from "react";
import "../css/modal.css"
const Modal=props=>{
    if(!props.show){
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <ul class="inline-list">
                        <li><h4 className="align-left"> Modal Başlık</h4></li>
                        <li><button className="align-right" class="align-left"  onClick={props.onClose}>X</button></li>
                    </ul>
                    
                    
                </div>
                <div className="modal-body">
                    <label>Country Name</label>
                <input class="model-input"></input>
                <label>Coutry native name</label>
                <input class="model-input"></input>
                <label>Country Capital</label>
                <input class="model-input"></input>
                <label>Country Flag</label>
                <input class="model-input"></input>
                </div>
                <div className="modal-fotter" class="button-container">
                    <button className="button" class="button primary-button" onClick={props.onClose}>Kaydet</button>
                    <button className="button"  class="button secondary-button" onClick={props.onClose}>Kapat</button>
                </div>
            </div>

        </div>
    )
}
export default Modal;