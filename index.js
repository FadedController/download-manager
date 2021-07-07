#!/usr/bin/env node
const { rename, mkdirSync, existsSync } = require("fs");
const chokidar = require("chokidar");
const env = require("dotenv");
env.config();

const PATH = process.env.FOLDER;
const watcher = chokidar.watch(PATH);

watcher.on("add", (path) => {
  const fileName = getFileName(path);
  const extension = getFileExtension(fileName);
  const folderPath = `${PATH}/${extension}`;
  const newPath = `${folderPath}/${fileName}`;
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
  }
  setTimeout(() => {
    rename(path, newPath, (err) => {
      if (err) throw err;
    });
  }, 5000);
});

const getFileName = (path) => path.split("/").pop();
const getFileExtension = (filename) => filename.split(".").pop();
