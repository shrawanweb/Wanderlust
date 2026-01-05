const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = Schema({
  title: {
    type: String,
    require: true,
  },

  map: {
    type: String,
    required: true,
  },

  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  category: String,

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// not working currently
// listingSchema.post("findByIdAndDelete", async(listing) =>{
//     if(listing){
//         await Review.deleteMany({_id:{$in : listing.reviews}});
//     }
// });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
