const { Schema, model } = require("mongoose")

const ComentSchema = new Schema({
    userName: { type: String },
    vote: { type: Number },
    coment: { type: String }
})

const ComentModel = model("Coments", ComentSchema)

module.exports = ComentModel