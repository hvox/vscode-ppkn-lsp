// The module 'vscode' contains the VS Code extensibility API
import { workspace, ExtensionContext } from "vscode";

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {

  const config = workspace.getConfiguration('ppkn-lsp');
  const path = `${config.get<string>('serverPath')}`;

  // let path = "/home/ulad/Desktop/mylang/ppk4n/run";
  console.log(`Ppkn LSP Server path: ${path}`);

  let ServerOptions: ServerOptions = {
      run: {command: path, args:['lsp']},
      debug: {command: path, args:['lsp']}
  };

  let clientOptions: LanguageClientOptions = {
      // Register the server for files with extension .ppkn
      documentSelector: [
          {
              pattern: '**/*.ppkn',
          }
      ],
  };

  let lspClient = new LanguageClient("Ppkn LSP", ServerOptions, clientOptions);

  lspClient.start();
  console.log("Ppkn LSP client has been started.");
}
