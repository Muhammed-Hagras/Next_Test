// muhammedhagras237
// Qut0EYYshI0cpkfn

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

if (!MONGO_URI) {
  throw new Error("Invaild environment variable: MONGO_URI");
}
export const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
// mongodb+srv://muhammedhagras237:<password>@cluster0.f2f48rh.mongodb.net/?retryWrites=true&w=majority
