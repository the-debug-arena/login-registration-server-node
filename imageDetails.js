const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema(
  {
   image:String
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailsScehma);
// app.get("/getAllUser", async (req, res) => {
//   let query = {};
//   if (req.query.search) {
//     query = {
//       $or: [
//         { fname: { $regex: req.query.search, $options: "i" } },
//         { email: { $regex: req.query.search, $options: "i" } },
//       ],
//     };
//   }
// console.log(JSON.stringify(query));
//   try {
//     const users = await User.find(query);
//     // console.log(users);
//     res.json({ success: true, data: users });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });