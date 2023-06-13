## Project Description

On GitHub https://github.com/microsoft/vscode/issues/83184 and Stack Overflow https://stackoverflow.com/questions/50239486/fast-text-scrolling-in-vs-code, there is a known issue regarding mouse sensitivity in Visual Studio Code. The problem arises when the mouse sensitivity is set to 1, causing the mouse to work fine, but the touchpad scroll speed becomes excessively fast.

To address this issue, you need to adjust the sensitivity settings specifically for the touchpad. However, this adjustment can lead to the mouse scroll speed becoming too slow. Previously, to change the mouse sensitivity, you had to navigate to the settings and modify the "settings.json" file manually. This process was cumbersome and required technical knowledge.

To simplify the process, you can now use an extension that provides an easier way to adjust the mouse sensitivity. With this extension, you can modify the mouse sensitivity settings without the need to manually edit the "settings.json" file. This solution offers a more user-friendly approach to resolving the issue.

By utilizing this extension, you can conveniently adjust the mouse sensitivity and bring it to a comfortable level without encountering the aforementioned problems.

# Scroll Sensitivity Command

This is a Visual Studio Code extension command that allows the user to change the scroll sensitivity value for various parts of the editor.

## How to Use

1. Install the extension in Visual Studio Code.
    1. 'C:/Users/Username/.vscode/extensions' open this path. 
    2. Copy this folder to here. 
2. Open Visual Studio Code and go to the command palette (press `Ctrl+Shift+P` or `Cmd+Shift+P` or ( `Ctrl+P` and press `>` ) ).

3. Search for the command `Mouse Sensitivity` and select it.

4. A prompt will appear asking you to enter the new scroll sensitivity value. Enter a numeric value and press Enter.

5. The scroll sensitivity value will be updated for the following settings:
   - `workbench.list.mouseWheelScrollSensitivity`
   - `editor.mouseWheelScrollSensitivity`
   - `terminal.integrated.mouseWheelScrollSensitivity`
   - `terminal.integrated.fastScrollSensitivity`

6. If you entered a valid numeric value, an information message will be displayed confirming that the sensitivity is now active.

7. If you entered an invalid value (non-numeric), an error message will be displayed.

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
