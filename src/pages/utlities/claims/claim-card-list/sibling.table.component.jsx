// https://betterprogramming.pub/how-to-efficiently-display-data-in-tables-with-react-7e133bad5719
// import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import SortedTable from "../../../../components/tables/sortedTable";

export default function SiblingTable(claimId) {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:3001/api/claim/getsibling/" + claimId);
    const data = await resp.json();
    console.log(data);
    setCells(data);
  };
  // accessor is the "key" in the data
  const columns = React.useMemo(() => [
      { Header: "Title", accessor: "Title" },
      { Header: "Parent", accessor: "GangParent" },
      { Header: "ClaimId", accessor: "ClaimId" },
      { Header: "Amount", accessor: "RefundAmount" }
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);
  const data = React.useMemo(() => cells, []);

  return <>{cells && <SortedTable columns={columns} data={data} />}</>;
}