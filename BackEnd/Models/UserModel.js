import { Schema, model } from "mongoose";
//create UserSChema with Validation
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,"name is required"],

    },
    email: {
        type: String,
        required: [true,"email is required"],
        unique: [true,"email must be unique"],
    },
    dateOfBirth: {
        type: Date,
        required: [true,"date of birth is required"],
    },
    mobileNumber: {
        type: String,
    },
    status: {
        type: Boolean,
        default: "true"

    }
}, {
    strict: true,
    timestamps: true,
    versionKey: false
});
//Create UserModel for UserSchema
export const UserModel = model('user', UserSchema);