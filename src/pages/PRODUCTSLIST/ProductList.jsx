import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/product/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(params.row.id)}>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default ProductList;

