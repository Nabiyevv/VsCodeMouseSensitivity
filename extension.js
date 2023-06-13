// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {
	// add config for settings
	// const config = vscode.workspace.getConfiguration();
	const name = "scrollsensitivity.mouseSens";
	const command = vscode.commands.registerCommand(name, async function () {
		// The code you place here will be executed every time your command is executed
		const config = vscode.workspace.getConfiguration();
		// Get input from user
		let sens = config.get('editor.mouseWheelScrollSensitivit');
		sens = await vscode.window.showInputBox({
		  prompt: "Enter the new scroll sensitivity value:",
		});
		if (sens) {
		  const newValue = parseFloat(sens);
		  if (!isNaN(newValue)) {
			config.update(
			  "workbench.list.mouseWheelScrollSensitivity",
			  newValue,
			  true
			);
			config.update("editor.mouseWheelScrollSensitivity", newValue, true);
			config.update(
			  "terminal.integrated.mouseWheelScrollSensitivity",
			  newValue,
			  true
			);
			config.update(
			  "terminal.integrated.fastScrollSensitivity",
			  newValue,
			  true
			);
			vscode.window.showInformationMessage("Sensitivity is now active!");
		  } else {
			vscode.window.showErrorMessage(
			  "Invalid input. Please enter a numeric value."
			);
		  }
		}
	  });
	// Mouse sens settings
	context.subscriptions.push(command);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
