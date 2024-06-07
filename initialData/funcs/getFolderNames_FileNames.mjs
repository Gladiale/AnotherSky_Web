import { readdir } from "fs/promises";

async function getFolderNames(path) {
  try {
    const entries = await readdir(path, { withFileTypes: true });
    const folders = entries
      .filter((entry) => entry.isDirectory())
      .map((folder) => folder.name);
    return folders;
  } catch (error) {
    console.error("フォルダ名の取得中にエラーが発生しました:", error);
  }
}

async function getFileNames(path) {
  try {
    const entries = await readdir(path, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile())
      .map((file) => file.name);
    return files;
  } catch (error) {
    console.error("ファイル名の取得中にエラーが発生しました:", error);
  }
}

export { getFolderNames, getFileNames };
