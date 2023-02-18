import React from "react";
import {AddButton, SearchField, UnplashLogo, PhotosContainer, Modal }  from "./Import/componentsImport.js";

export default function Main() {

    const [modalBody, setModalBody] = React.useState("");
    const [modalFooter, setModalFooter] = React.useState("");
    const [search, setSearch] = React.useState("");

    
    function hideAddModal() {
        document.getElementById("add-photo-modal").style.display = "none";
    }

    function handleAddButton() {
        setModalBody(
            <div className="input-group">
                <label htmlFor="photo-url">Photo URL</label>
                <input type="text" id="photo-url" name="image_url" placeholder="Image URL" required />

                <label htmlFor="photo-description">Photo Description</label>
                <input type="text" id="photo-description" name="description" maxLength="100" minLength="10" placeholder="Description" required/>
            </div>
        );
        setModalFooter(
            <div className="modal-buttons">
                <button type="button" className="cancel-button" onClick={hideAddModal}>Cancel</button>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        );

        document.getElementById("add-photo-modal").style.display = "block";
    }

    return (
        <div className="main-container">
            <Modal action="/photos/" method="post" id={"add-photo-modal"} class={"add-photo-modal"} title={"Add a new photo"} body={modalBody} footer={modalFooter} />
            <div className="top-bar">
                <UnplashLogo />
                <SearchField setSearch={setSearch} />
                <AddButton onClick={handleAddButton} />
            </div>
            <PhotosContainer searched={search} />
        </div>
    );
}