"use client";

import { useState, useEffect } from "react";
import { read, utils } from "xlsx";

const filterRowsByColumnValues = (
  data: any[],
  columnName: string,
  values: string[]
): any[] => {
  return data.filter((row) => values.includes(row[columnName]));
};

export default function ExcelFeaturePage() {
  const [account, setAccount] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      /* Fetch file */
      const f = await fetch("/accountSheetSample.xlsx");
      const ab = await f.arrayBuffer();

      /* Parse file */
      const wb = read(ab);
      const ws = wb.Sheets[wb.SheetNames[0]];

      /* Generate JSON */
      setAccount(
        filterRowsByColumnValues(utils.sheet_to_json(ws), "USERNAME", [
          "asdf@example",
        ])
      );
    })();
    console.log(account);
  }, []);

  return (
    <>
      {account.map((acc) => (
        <div key={acc.USERNAME}>{acc.USERNAME}</div>
      ))}
    </>
  );
}
