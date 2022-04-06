const Events = require("../models/Events");
const Coments = require("../models/Coments")

class ComentsServices {
    static async serviceGetComents(req, next) {
        try {
            const event = await Events.findById(req.params.id).populate('coments')
            return event
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async serviceAddComent(req, next) {
        try {
            const newComent = await Coments.create(req.body);
            const event = await Events.findByIdAndUpdate(req.params.id,
                { $push: { coments: newComent } },
                { new: true })
            return event
        } catch (err) {
            console.error(err)
            next(err)
        }
    }
}

module.exports = ComentsServices