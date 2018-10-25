const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    dateCreated: Date,
    recipeDescreption: String,
    update: Boolean,
    titleId: String
},{
    versionKey: false
})

const recipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = recipeModel;