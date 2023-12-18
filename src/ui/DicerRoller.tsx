import { App, TFile, Vault } from "obsidian";
import * as React from "react";
import { UpdateHp } from "src/classes/UpdateHp";

declare global {
  const app: App;
}

export const DiceRoller = ({ filePath }: { filePath: string }) => {
  // @ts-ignore
  const me = app.plugins.plugins.metaedit.api;
  // @ts-ignore
  const dv = app.plugins.plugins.dataview.api;
  const [hp, setHp] = React.useState({
    current: "0",
    max: "0",
  });

  React.useEffect(() => {
    const hpFile = dv.page(filePath);
    // console.log("hpFile", hpFile);
    setHp({
      current: hpFile.current,
      max: hpFile.max,
    });
  }, []);

  const updateCurrent = async () => {
    const newVal = await new Promise<string>((res) =>
      new UpdateHp((r) => res(r)).open()
    );
    console.log(filePath);
    await me.update("current", newVal, filePath);
    setHp((prev) => ({ ...prev, current: newVal }));
  };

  return (
    <>
      <div className="DiceRoller__container">
        <button onClick={() => updateCurrent()}>Current: {hp.current}</button>
        <button>Max: {hp.max}</button>
      </div>
    </>
  );
};
