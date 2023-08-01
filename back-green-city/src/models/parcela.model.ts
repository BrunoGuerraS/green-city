import { Schema, model } from "mongoose";

const parcelaSchema = new Schema({
    status: {
        type: String,
        require: true,
    }
})

const Parcela = model('Parcela', parcelaSchema);
export default Parcela;