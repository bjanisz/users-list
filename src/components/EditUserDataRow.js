export const EditUserDataRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
      <tr key={editFormData.id}>
        <td>
          <input
            type="text"
            required
            placeholder="Enter a name.."
            name="name"
            value={editFormData.name}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
        <input
            type="text"
            required
            placeholder="Enter an username.."
            name="username"
            value={editFormData.username}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
        <input
            type="email"
            required
            placeholder="Enter an email.."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
        <input
            type="text"
            required
            placeholder="Enter an company name.."
            name="company"
            value={editFormData.company.name}
            onChange={handleEditFormChange}
          />
        </td>
        <td className="buttons-cell">
          <button type="submit">SAVE</button>
          <button type="button" onClick={handleCancelClick}>CANCEL</button>
        </td>
      </tr>
    );
  };
  