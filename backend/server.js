const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json()) 
app.use(cors())

const port = process.env.PORT || 3000 

function connectDB(){
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error("Error connecting to DB :", err))
}
// TimeOut for docker-compose to give mongo container time to start up
setTimeout(connectDB,3000)

// Define Food Schema
const foodSchema = new mongoose.Schema({
  name: String,
  color: String,
});

// Create Food Model
const Food = mongoose.model("Food", foodSchema);

// Seed Function
async function seedFoods() {
  // Define five foods with name and color
  const foods = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Purple" },
    { name: "Orange", color: "Orange" },
    { name: "Lettuce", color: "Green" },
  ];

  try {
    //empty the DB
    await Food.deleteMany({});
    // Insert foods
    await Food.insertMany(foods);
    console.log("Foods seeded successfully:", foods);
  } catch (error) {
    console.error("Error seeding foods:", error);
  }
  
}

// Run the seed function
seedFoods();



app.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.send(foods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching foods", error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

