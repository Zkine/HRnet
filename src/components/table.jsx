import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useStore } from "react-redux";
import "ag-grid-community/styles/ag-grid.min.css";
import "ag-grid-community/styles/ag-theme-alpine.min.css";
import JsnData from "../data/datas.json";

export default function Table() {
  const store = useStore();

  JsnData[0].columnDefs.map((e) => {
    if (e.field === "date-of-birth") {
      return (e.field = e.field.replace("-", " ")), (e.minWidth = 120);
    } else if (
      e.field !== "department" &&
      e.field !== "street" &&
      e.field !== "city" &&
      e.field !== "state"
    ) {
      return (e.field = e.field.replace("-", " "));
    }
  });

  const arrayList = store.getState().list.map((e) => {
    const {
      "first-name": firstName,
      "last-name": lastName,
      "start-date": startDate,
      "date-of-birth": dateOfBirth,
      "zip-code": zipCode,
      ...rest
    } = e;
    let updatedE = {
      "first name": firstName,
      "last name": lastName,
      "start date": startDate,
      "date of birth": dateOfBirth,
      "zip code": zipCode,
      ...rest,
    };
    return updatedE;
  });

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );
  const paginationPageSizeSelector = useMemo(() => {
    return [10, 25, 50, 100];
  }, []);
  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);
  return (
    <div className="table ag-theme-alpine">
      <AgGridReact
        columnDefs={JsnData[0].columnDefs}
        rowData={arrayList}
        animateRows={true}
        autoSizeStrategy={autoSizeStrategy}
        defaultColDef={defaultColDef}
        paginationPageSize={10}
        paginationPageSizeSelector={paginationPageSizeSelector}
        pagination={true}
      />
    </div>
  );
}
