# Obsidian TTRP Stats

The goal of this plugin is to make stats sheets that the user can have in their right toolbar and see all of their stats as well as make changes as needed.

## DataView and MetaEdit

This plugin leverages the [DataView](https://github.com/blacksmithgu/obsidian-dataview) and [MetaEdit](https://github.com/chhoumann/MetaEdit) plugins. This would have taken _a lot_ more work if it wasn't for the efforts they put into their own plugins.

Go show them some support!

## Roadmap

1. Configuration File for Stats
   - Use a slash to denote a sub property like `HP/Current: 5` and `HP/Max: 10`
   - Have a config file where you define properties for each different stat
   - Use inline `dataviewjs` to create dynamic value fields
     ```javascript
     Wisdom /
       Modifier
         ::`$= Math.floor((Number(dv.current()['Wisdom/Score']) - 10) / 2)`;
     ```
   - Register custom functions for ease of use
     - You could register `getMod` function like this:
       ```javascript
       window["getMod"] = (str) => {
         const num = Number(str);
         return Math.floor((num - 10) / 2);
       };
       ```
     - Use `getMod` function like this:
       ```javascript
       Wisdom / Modifier::`$= getMod(dv.current()['Wisdom/Score']))`;
       ```
2. Drag and drop stats and choose from predefined component types like cards, tables, etc.
