import fs from "fs";

const readFile = (path: string) => {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
};

export default readFile;
