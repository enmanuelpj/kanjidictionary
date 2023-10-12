import React, { useState, useEffect } from "react";
import './styles/Table.css'
import './styles/AddModal.css'



function DeleteKanji() {

    const [reading, setReading] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleDeleteSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://kanjidictionary.onrender.com/api/deleteKanji', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reading }),
            });

            if(response.ok){
                closeModal();
                window.location.reload();
            }else {
                console.error('Error while deleting the kanji')
            }
        } catch(error) {
            console.error('Error while sending:', error)
        }
    }

    return(
        <div>
            <form onSubmit={handleDeleteSubmit}>
                        <div className="kanji-input-container">
                            <label className="reading-label">Reading</label>
                            <input
                                type='text'
                                className='add-input'
                                name='reading'
                                value={reading}
                                onChange={(e) => setReading(e.target.value)}
                                >

                            </input>
                        </div>
                        
                        <button type="submit" className="add-kanji-button">Delete</button>

                    </form>
        </div>
    )
}

export default DeleteKanji;