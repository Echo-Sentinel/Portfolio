import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

app.use(express.json());

const dbPath = path.resolve("./db.json");

const readDB = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

app.get("/students/", (req, res) => {
  const data = readDB();
  res.json(data);
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readDB();
  const item = data.find((item) => item.id === parseInt(id));
  item ? res.json(item) : res.status(404).json({ message: "tapilmadi" });
});

app.post("/students/", (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  const data = readDB();
  data.push(newItem);
  writeDB(data);
  res.status(201).json({ message: "Elavə olundu", item: newItem });
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readDB();
  const newData = data.filter((item) => item.id !== parseInt(id));
  writeDB(newData);
  res.status(200).json({ message: `ID ${id}  silindi.` });
});

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  const data = readDB();
  const index = data.findIndex((item) => item.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: "Obyekt tapilmadi" });

  data[index] = { id: parseInt(id), ...updatedItem };
  writeDB(data);
  res.status(200).json({ message: `ID ${id} yenilendi.`, item: data[index] });
});

app.patch("/students/:id", (req, res) => {
  const { id } = req.params;
  const data = readDB();
  const index = data.findIndex((item) => item.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: "Obyekt tapilmadi" });

  data[index] = { ...data[index], ...req.body };
  writeDB(data);
  res
    .status(200)
    .json({ message: `ID ${id}  yeniledi`, item: data[index] });
});

app.listen(port, () => {
  console.log(` Server hazır: http://localhost:${port}`);
});
