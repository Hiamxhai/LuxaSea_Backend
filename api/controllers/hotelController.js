import Hotel from "../models/Hotel.js";

export const  createHotel = async (req, res, next) => {
  const newHotel = Hotel(req.body);

  try {
    console.log("Call Api Create Success");
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const updateHotel = async (req, res, next) => {
   
     try {
       console.log("Call Api Update Success");
       const updateHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set : req.body},
           //Update data after call 
          { new: true }
       );
       res.status(200).json(updateHotel);
     } catch (err) {
       console.error(err);
       res.status(500).json(err);
     }
 };

 export const deleteHotel = async (req, res) => {
     try {
       console.log("Call Api Delete Success");
       await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("Hotel has been deleted");
     } catch (err) {
       console.error(err);
       res.status(500).json(err);
     }
   };

   export const getHotel = async (req, res) => {
    try {
      console.log("Call Api GetData Success");
      const hotel = await Hotel.findById(
        req.params.id,
      );
      res.status(200).json(hotel);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  };

  export const getAll = async (req, res, next) => {
    const failed = true;
  
    // if(failed) return next(createError(401, "You are not authenticated "));
  
    // return next();
    try {
      const hotels = await Hotel.find(
        // req.params.id,
      );
      res.status(200).json(hotels);
    } catch (err) {
      // res.status(500).json(err);
      next(err);
    }
  };