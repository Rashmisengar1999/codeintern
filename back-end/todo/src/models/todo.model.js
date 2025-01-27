import mongoose, { Schema } from "mongoose"

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema)

export default Todo