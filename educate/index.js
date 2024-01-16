import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

const featureSchema = new Schema({
  icon: String,
  title: String,
  text: String,
});

const FeaturesModel = mongoose.model("features", featureSchema);

app.get("/features", async (req, res) => {
  const features = await FeaturesModel.find({});
  res.send(features);
});

app.get("/features/:id", async (req, res) => {
  const { id } = req.params;
  const feature = await FeaturesModel.find(id);
  res.send(feature);
});

app.post("/features", async (req, res) => {
  const { icon, title, text } = req.body;
  const newFeature = new FeaturesModel({ icon, title, text });
  await newFeature.save();
  res.send("Got a POST request");
});

app.put("/features/:id", async (req, res) => {
  const { id } = req.params;
  const { icon, title, text } = req.body;
  const feature = await FeaturesModel.findByIdAndUpdate(id, {
    icon,
    title,
    text,
  });
  res.send("Got a PUT request at /features");
});

app.delete("/features/:id", async (req, res) => {
  const { id } = req.params;
  const feature = await FeaturesModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /");
});

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
