import { Table } from "react-bootstrap";

const TableView = ({ tableMetaData, data }) => {
  return (
    <div>
      {data.length > 0 && (
        <Table className="custom-table align-middle" striped>
          <thead>
            <tr>
              {tableMetaData.map((meta, i) => (
                <th className="th-bg t-size border-0" key={i}>
                  {meta.headerTitle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, i) => (
              <tr key={i}>
                {tableMetaData.map((meta, j) => (
                  <td className={`t-size border-0 ${meta.colSize}`} key={j}>
                    {meta.render(rowData)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableView;
