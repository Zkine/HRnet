import { AgGridReact } from "ag-grid-react";
import { useStore } from "react-redux";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import JsnData from "../data/datas.json";

export default function Table() {
  const store = useStore();
  return (
    <div className="table ag-theme-alpine">
      <AgGridReact
        columnDefs={JsnData[0].columnDefs}
        rowData={store.getState().list}
      />
    </div>
  );
}
