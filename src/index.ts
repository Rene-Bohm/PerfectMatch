import express from "express";
import expressWs from "express-ws";

import { version } from "./App";

const app = expressWs(express()).app;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/app/:id", (req, res) => {
	res.render("app.ejs", { id: req.params.id });
});

app.ws("/app/:id", (ws, req) => {
	ws.on("message", (msg) => {
		ws.send(JSON.stringify({ got: msg }));
	});
});

let port = process.env.PORT || 80;
app.listen(port, () => console.log(`Running at port ${port}`));
