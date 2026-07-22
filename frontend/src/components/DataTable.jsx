import { useMemo } from 'react';
import Button from './Button';
import './DataTable.css';
import '/src/table.css';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DataTable({
  headers,
  data,
  title,
  onAdd,
  onEdit = null,
  onDelete = null,
}) {
  const hasActions = useMemo(() => !!onEdit || !!onDelete, [onEdit, onDelete]);

  function handleEdit(row) {
    if (onEdit) {
      onEdit(row);
    }
  }

  function handleDelete(row) {
    if (onDelete) {
      onDelete(row);
    }
  }

  return (
    <section className="data-table-section">
      <div className="data-table-top">
        <h2 className="data-table-title">{title}</h2>
        {onAdd && (
          <Button onClick={onAdd} className="btn-primary">
            Add
          </Button>
        )}
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
              {hasActions && (
                <td className="d-flex gap-2">
                  {onEdit && (
                    <Button
                      onClick={() => handleEdit(row)}
                      sm
                      primary
                      icon={faEdit}
                      iconStyle
                    >
                      Edit
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      onClick={() => handleDelete(row)}
                      sm
                      danger
                      icon={faTrash}
                      iconStyle
                    >
                      Delete
                    </Button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
