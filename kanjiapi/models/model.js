const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({

    kanji: {
        required: true,
        type: String
    },
    hiragana: {
        required: true,
        type: String
    },
    reading: {
        required: true,
        type: String
    },
    meaning: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Kanji', kanjiSchema);