import  { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    'trackName':{type:SchemaTypes.String},
    'artistName':{type:SchemaTypes.String},
    'artworkUrl100':{type:SchemaTypes.String},
    'previewUrl':{type:SchemaTypes.String}
});
export const UserModel = mongoose.model('users6', userSchema);

