# VSCode extension with LSP client for Ppkn LSP

This repository contains extension for VSCode text editor.
This extension adds LSP client into VSCode and allows usage of Ppkn LSP server.

## Requirements

In order to work this extension requires Ppkn LSP server to be installed.

## Extension Settings

This extension contributes the following settings:

* `ppkn-lsp.serverPath`: Specifies the path to Ppkn LSP server.

## Known Issues

Any non-ascii characters break position encoding in communication between LSP server and LSP client.
This is duo of server supporting only utf-8 and VSCode supporting exclusively utf-16.

## Release Notes

### 1.0.0 (NOT RELEASED YET)

Initial release.

---

**Thank you!**
