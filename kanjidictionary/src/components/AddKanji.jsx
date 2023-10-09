import React, { useState, useEffect } from "react";
import './styles/Table.css'
import './styles/AddModal.css'

function AddKanji() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    }    

    const [addingKanjiData, setAddingKanjiData] = useState({
        kanji: '',
        hiragana: '',
        reading: '',
        meaning: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAddingKanjiData({
            ...addingKanjiData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/newKanji', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addingKanjiData)
            });

            if(response.ok){
                closeModal();
                window.location.reload();
            } else {
                console.error('Error while adding the kanji')
            }
        } catch (error) {
            console.error('Error while sending:', error)
        }
    }


    return (
        <div>
                    <h2 id='add-title'>Add new kanji</h2>

                    <form onSubmit={handleSubmit}>
                        <div className='kanji-input-container'>
                            <label className='kanji-label'>漢字</label>
                            <input
                                    type='text'
                                    className='add-input'
                                    name="kanji"
                                    value={addingKanjiData.kanji}
                                    onChange={handleInputChange}
                                    >
                                    
                            </input>
                        </div>

                        <div className='kanji-input-container'>
                            <label className='hiragana-label'>平仮名</label>
                            <input
                                    type='text'
                                    className='add-input'
                                    name='hiragana'
                                    value={addingKanjiData.hiragana}
                                    onChange={handleInputChange}
                                    >
                            </input>
                        </div>

                        <div className='kanji-input-container'>
                            <label className='reading-label'>Reading</label>
                            <input
                                    type='text'
                                    className='add-input'
                                    name='reading'
                                    value={addingKanjiData.reading}
                                    onChange={handleInputChange}
                                    >
                            </input>
                        </div>

                        <div className='kanji-input-container'>
                            <label className='meaning-label'>Meaning</label>
                            <input
                                    type='text'
                                    className='add-input'
                                    name='meaning'
                                    value={addingKanjiData.meaning}
                                    onChange={handleInputChange}
                                    >
                            </input>
                        </div>

                        <button type="submit" className='add-kanji-button'>Add</button>

                    </form>
        </div>
    )

}

export default AddKanji;