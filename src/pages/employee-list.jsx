import { useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Table from "../components/table";

export default function EmployeeList() {
  useEffect(() => {
    document.title = "HRnet - employee-list page";
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
