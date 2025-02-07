import mongoose from 'mongoose';



const Schema = mongoose.Schema;

const campSchema = new Schema({
    
    tent: {
        type: String,
        
    },
    bag: {
        type: String,
        
    },
    rug: {
        type: String,
        
    },
    set: {
        type: String,
        
    },
    days: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
});

const Camp = mongoose.model('Camp', campSchema);

export default Camp;








