import React, { useState, useEffect } from "react";
import './styles/Table.css'
import './styles/AddModal.css'
import AddKanji from "./AddKanji";
import DeleteKanji from "./DeleteKanji";
import UpdateKanji from "./UpdateKanji";
import Modal from 'react-modal';

function Table() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
    const [kanjiData, setKanjiData] = useState([]);
    const [editingKanji, setEditingKanji] = useState(null);

    console.log(kanjiData);

    useEffect(() => {
        fetch('http://localhost:4000/api/getAllKanji')
            .then(response => response.json())
            .then(data => setKanjiData(data))
            .catch(error => console.error(error));
    }, [])

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }    

    const openDeleteModal = () => {
        setDeleteModalIsOpen(true);
    }

    const closeDeleteModal = () => {
        setDeleteModalIsOpen(false)
    }

    const openUpdateModal = () => {
        setUpdateModalIsOpen(true);
    }

    const closeUpdateModal = () => {
        setUpdateModalIsOpen(false);
    }

    const handleEdit = (index) => {
        const selectedKanji = kanjiData[index];
        setEditingKanji(selectedKanji);
        setUpdateModalIsOpen(true);
    }

    return (
        <div className='content-table-div'>
            <h1 className='title'>辞書</h1>
            <div className='table-container'>
                <div className='button-container'>
                    <button id='button' className='add-button' onClick={openModal}> +</button>
                    <button id='button' className='delete-button' onClick={openDeleteModal}>-</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>漢字</th>
                            <th>平仮名</th>
                            <th>Reading</th>
                            <th>Meaning</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kanjiData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.kanji}</td>
                                <td>{row.hiragana}</td>
                                <td>{row.reading}</td>
                                <td>{row.meaning}</td>
                                <td className="update-button">
                                    <button onClick={() => handleEdit(index)} style={{ backgroundColor: '#ED8383', color: '#5a0404', width: '40px', height: '40px', border: 'none', borderRadius: '50%', fontSize: '18px' }}>!!</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Add kanji modal"
                    className='add-kanji-modal'
                    overlayClassName='kanji-modal-overlay'
                >
                    <button className='close-modal-button' onClick={closeModal}>X</button>
                    <AddKanji/>
            </Modal>
            
            <Modal
                isOpen={updateModalIsOpen}
                onRequestClose={closeUpdateModal}
                contentLabel="Update kanji modal"
                className='add-kanji-modal'
                overlayClassName='kanji-modal-overlay'
                >
                
                <button className='close-modal-button' onClick={closeUpdateModal}>X</button>
                <UpdateKanji editingKanji={editingKanji} closeModal={closeUpdateModal}/>


            </Modal>


            <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={closeDeleteModal}
                contentLabel="Delete kanji modal"
                className='delete-kanji-modal'
                overlayClassName='delete-kanji-modal-overlay'
                >

                <button className='close-modal-button' onClick={closeDeleteModal}>X</button>
                <h2 id='add-title'>Delete kanji</h2>
                <DeleteKanji/>
            </Modal>

        </div>

        
    )
}

export default Table;