import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).josn({
    error: "Something went wrong!"
  })
})
app.use('*any', (req, res, next) => {
  try {
    throw new Error("This is a custom error for testing purposes.");
  } catch (error) {
    next(error);
  }
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});