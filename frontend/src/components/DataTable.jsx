import Button from "./Button";
import "./DataTable.css";
import "/src/table.css";

export default function DataTable({headers, data, title, onAdd}){
    return (
    <section className="data-table-section">
        <div className="data-table-top">
            <h2 className="data-table-title">{title}</h2>
            {onAdd &&
                <Button onClick={onAdd} className="btn-primary">Add</Button>
            }
        </div>
        <table className="data-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header.title} className="data-table-header">
                            {header.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="data-table-row">
                        {headers.map((header) => (
                            <td key={header.key} className="data-table-cell">
                                {row[header.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    ); 
}