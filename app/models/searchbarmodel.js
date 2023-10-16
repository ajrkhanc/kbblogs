const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Searchurl: {
        type: String
    },
    keyword: {
        type: String
    }
})

module.exports = mongoose.model('searchbar', dataSchema)