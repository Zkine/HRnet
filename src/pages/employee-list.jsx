import { useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Table from "../components/table";
import { useStore } from "react-redux";

export default function EmployeeList() {
  const store = useStore();
  useEffect(() => {
    document.title = "HRnet - employee-list page";
    console.log(store.getState().list);
  });

  return (
    <>
      <Header>Current Employees</Header>
      <main className="main_list">
        <section>
          <Table />
        </section>
        <div>
          <Link to="/">Home</Link>
        </div>
      </main>
    </>
  );
}
