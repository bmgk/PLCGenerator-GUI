import { spawn } from 'child_process';
import electron from 'electron';
import path from 'path';
import fs from 'fs';

import { HomeFormTreeResponse } from 'types';

const generatePath = (filePath: string) => {
  return `${filePath}${
    path.sep
  }VASS6-PLC-Creator-${new Date()
    .toISOString()
    .substr(0, 10)}-${Math.random().toString().substr(0, 10)}.json`;
};

export const saveDraft = (tree: HomeFormTreeResponse) => {
  return pickFolder().then((filePath) => {
    try {
      const fileName = generatePath(filePath);
      fs.writeFileSync(fileName, JSON.stringify(tree), 'utf-8');
      return Promise.resolve(fileName);
    } catch (e) {
      console.error(e);
      return Promise.reject('FILE_ERROR');
    }
  });
};

export const pickDraftJSON = () => {
  return pickJson().then((fileName) => {
    try {
      const tree = fs.readFileSync(fileName, 'utf-8');
      return Promise.resolve(JSON.parse(tree));
    } catch (e) {
      console.error(e);
      return Promise.reject('FILE_ERROR');
    }
  });
};

const pickJson = () => {
  return electron.remote.dialog
    .showOpenDialog({})
    .then((el) => el.filePaths[0]);
};

export const pickFolder = () => {
  return electron.remote.dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((el) => el.filePaths[0]);
};

export const invokeProjectImporterLoop = (paths: string[]) => {
  invokeProjectImporter(0, paths);
};

const invokeProjectImporter = (index: number, paths: string[]) => {
  const path = paths[index];
  if (path === undefined) {
    return;
  }
  let tiaWPF = spawn(`powershell.exe`, [
    `../Release/TiaWpfProjectImporter.exe /Source ${path}`,
  ]);

  tiaWPF.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  tiaWPF.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  tiaWPF.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });

  tiaWPF.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    invokeProjectImporter(index + 1, paths);
  });
};
