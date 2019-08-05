// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { write } from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand('extension.socli', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('StackOverflow Client now ready, enter your query!');
		let options: vscode.InputBoxOptions = {
			prompt: "-q --query, -i --interactive, -r--res, -t--tag, -n--new, -u--user, -a--api, -d--del, -s--sosearch, -h--help\nUsage: socli [ Arguments] < Search Query >",
			placeHolder: "Your StackOverflow Search"
		};
		let query = vscode.window.showInputBox(options).then(value => {
			if (!value) { return; }
			let answer1 = value;
			if (vscode.window.activeTerminal === undefined) { return; }
			vscode.window.activeTerminal.sendText("socli " + answer1);
			vscode.window.activeTerminal.show(false);
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
