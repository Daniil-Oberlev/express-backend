import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:wwwwww@cluster0.kb2seip.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB OK");
  } catch (err) {
    console.error("DB error", err);
  }
};

export default connectDB;
