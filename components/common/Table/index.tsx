import React, { FC } from "react";
import { TableProps } from "./types";
import { TableWrapper } from "./Table.styles";
import { Trash2, Pencil } from "lucide-react";
import Button from "../Button";
import { deleteStudentMutation } from "../../../hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Table: FC<TableProps> = (props) => {
  const { columns = [], dataSrc = [], loading = true } = props;
  const queryClient = useQueryClient();

  const loadingContent =
    dataSrc.length == 0 && loading ? (
      <tr style={{ textAlign: "center" }}>
        <td colSpan={columns.length}>Loading...</td>
      </tr>
    ) : null;

  const emptyContent =
    dataSrc.length == 0 && !loading ? (
      <tr>
        <td colSpan={columns.length} style={{ textAlign: "center" }}>
          {" "}
          No Data
        </td>
      </tr>
    ) : null;

  const { mutate } = deleteStudentMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      console.log("Deleted");
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const handeDelte = (id: string) => {
    mutate(id);
  };
  const router = useRouter();

  const handleUpdatePage = (id: string) => {
    router.push(`students/update/${id}`);
  };
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.dataIndex}>{column.title}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loadingContent}
          {emptyContent}
          {dataSrc.map((data) => (
            <tr key={data[columns[0]?.dataIndex]}>
              {columns.map((col) => (
                <td key={col.dataIndex}>{data[col.dataIndex]}</td>
              ))}
              <td>
                <Button onClick={() => handeDelte(data.id)}>
                  <Trash2 />
                </Button>
                <Button onClick={() => handleUpdatePage(data.id)}>
                  <Pencil />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
