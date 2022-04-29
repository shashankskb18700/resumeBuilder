const express = require("express");
const fs = require("fs");
var pdf = require("html-pdf");
const cors = require("cors");

const app = express();
app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
const whitelist = ["https://redeemer-1a3d9.web.app"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// if you want to use it in offline means on local  host comment next line of code ;
// app.use(cors(corsOptions));

// app.use(cors({ origin: 'https://redeemer-1a3d9.web.app', credentials: true }));

const PORT = process.env.PORT || 8000;
// const htmlfile = fs.readFileSync("./htmlResume.html", "utf-8");

var options = { format: "letter" };

// pdf.create(htmlfile, options).toFile("./Resume.pdf", function (err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });

app.get("/", async (req, res) => {
  // const htmlfil = await fs.readFileSync("./htmlResume.html", "utf-8");
  // await pdf
  //   .create(htmlfil, options)
  //   .toFile("./Resume.pdf", function (err, res) {
  //     if (err) return console.log(err);
  //     console.log(res);
  //     // { filename: '/app/businesscard.pdf' }
  //   });
  res.set("Access-Control-Allow-Origin", "*");
  // res.send(l);

  res.download("./Resume.pdf", "Resume.pdf");
  // res.download("./htmlResume.html", "htmlResume.html");
  // res.send(htmlfil);
});

app.post("/post", async (req, res) => {
  const htmlString = JSON.parse(req.body.name);
  console.log(JSON.parse(req.body.name));

  // await pdf
  //   .create(htmlString, options)
  //   .toFile("./Resume.pdf", function (err, res) {
  //     if (err) return console.log(err);
  //     console.log(res); // { filename: '/app/businesscard.pdf' }
  //   });
  // await pdf.create(htmlString).toStream(function (err, stream) {
  //   stream.pipe(fs.createWriteStream("./Resume.pdf"));
  // });
  await fs.writeFileSync("./htmlResume.html", htmlString);
  // await fs.writeFile("")
  // await fs.writeFile("./htmlResume.html", htmlString, "utf8", (err, res) => {
  //   console.log(err);
  // });

  await pdf
    .create(htmlString, options)
    .toFile("./Resume.pdf", function (err, res) {
      if (err) return console.log(err);
      console.log(res);
      // { filename: '/app/businesscard.pdf' }
    });
  setTimeout(() => {
    res.send("from post");
  }, 3000);
});
// https://redeemer-1a3d9.web.app

app.listen(PORT, () => {
  console.log("on port 8000");
});
