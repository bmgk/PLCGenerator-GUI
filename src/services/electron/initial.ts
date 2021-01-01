import { spawn } from 'child_process';

export const runServer = () => {
  const server = spawn(
    `powershell.exe`,
    [`cd ../netcoreapp3.1/; ./PlcCreator.exe`],
    { shell: true, detached: true },
  );

  server.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  server.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  return server;
};
