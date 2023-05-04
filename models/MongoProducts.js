import mongoose, { models } from "mongoose";

const MongoProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlenght: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const MongoProduct =
  models.MongoProduct || mongoose.model("MongoProduct", MongoProductSchema);

export default MongoProduct;
