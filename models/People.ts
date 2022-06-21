/* eslint-disable linebreak-style */
import mongoose, {model, Schema} from 'mongoose';

const PeopleSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
});

export default mongoose.models.People || model('People', PeopleSchema);
