const express = require('express');
const router = express.Router();
const Kanji = require('../models/model.js');
const { default: mongoose } = require('mongoose');

router.post('/newKanji', async (req, res) => {
    const kanji = new Kanji({
        kanji: req.body.kanji,
        hiragana: req.body.hiragana,
        reading: req.body.reading,
        meaning: req.body.meaning
    })
    
    try {
        const kanjiToSave = await kanji.save();
        res.send(`The following kanji was added: ${kanji.kanji}`);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.patch('/updateKanji', async (req, res) => {
    try {
        const id = req.body.id;
        const updatedData = {
            kanji: req.body.kanji,
            hiragana: req.body.hiragana,
            reading: req.body.reading,
            meaning: req.body.meaning
        }

        await Kanji.findByIdAndUpdate(id, updatedData)
        res.status(200).json({ message: 'Updated successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} )

router.get('/getAllKanji', async (req, res) => {
    
    try {
        const kanjis = await Kanji.find();
        res.send(kanjis)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.delete('/deleteKanji', async (req, res) => {
    try {
        const reading = req.body.reading;
        const result = await Kanji.deleteOne( { "reading": reading })

        res.send(`The kanji ${reading} has been deleted`)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;