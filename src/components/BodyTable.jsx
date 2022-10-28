import React, { useContext } from 'react';
import { setIdUser } from '../slice/sliceUsers';
import { useDispatch } from 'react-redux';
import { AppContext } from '../context';

const BodyTable = ({ filteredUsers }) => {
  const { setIdUserShouldBeRemove } = useContext(AppContext);

  const dispatch = useDispatch();

  const handleClickEditUser = (id) => {
    dispatch(setIdUser(id));
  };

  const settingIdUser = (id) => {
    setIdUserShouldBeRemove(id);
  };

  const handleClickViewUser = (id) => {
    dispatch(setIdUser(id));
  };

  return (
    <React.Fragment>
      {filteredUsers()?.map((data) => {
        const { name, id, status, shortName, date, email, website } = data;
        return (
          <tr className="container-tr-tbody" key={`trInInfoUser ${id}`}>
            <th scope="row" className="text-center pt-4">
              {id}
            </th>
            <td className="pt-4">
              <span className="span-name-user">{shortName}</span>
              {name}
            </td>
            <td className="pt-4">{email}</td>
            <td className="pt-4">{website}</td>
            <td className="pt-4">
              {status ? (
                <span className="state-user-active">Activo</span>
              ) : (
                <span className="state-user-inactive">Inactivo</span>
              )}
            </td>
            <td className="pt-4">{date}</td>
            <td className="pt-4">
              <div className="dropstart">
                <div
                  id="actionsUser"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    style={{
                      width: 25,
                      cursor: 'pointer'
                    }}
                    src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png"
                    alt="options user"
                  />
                </div>
                <ul className="dropdown-menu" aria-labelledby="actionsUser">
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRightViewUser"
                      aria-controls="offcanvasRightViewUser"
                      onClick={() => handleClickViewUser(id)}
                    >
                      Ver
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRightEditUser"
                      aria-controls="offcanvasRightEditUser"
                      onClick={() => handleClickEditUser(id)}
                    >
                      Editar
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      data-bs-target="#deletingUser"
                      data-bs-toggle="modal"
                      onClick={() => settingIdUser(id)}
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export { BodyTable };
