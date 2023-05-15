import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    //required true because hotel can not null
    required: true,
  },
  type : {
     type : String,
     required : true
  },
   city: {
     type : String,
     required : true
  },
  address: {
     type : String,
     required : true
  },
  distances: {
     type : String,
     required : true
  },
  photos: {
     type: [String],
  },
  title : {
     type : String,
     required : true
  },
  description : {
     type : String,
     required : true
  },
  rating: {
     type : Number,
     required : true,
     min: 0,
     max: 5
  },
  rooms : {
     type: [String],
  },
  cheapestPrice: {
     type : Number,
     required : true
  },
  featured: {
     type : Boolean,
     default : false
  }
});

// export default mongoose.models("Hotel", HotelSchema)
const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;


