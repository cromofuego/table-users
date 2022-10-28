import React, { useState, useEffect } from 'react';
import { HeaderTitlesInfoUser } from './HeaderTitlesInfoUser';
import { sortingStateInfoUser } from '../slice/sliceUsers';
import { useDispatch, useSelector } from 'react-redux';

const HeadTable = () => {
  // const imgLink = 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png';
  const defaultState = 'img-rotate-inactive';
  // const [imgRotationIconDate, setImgRotationIconDate] = useState(defaultState)
  const [imgRotationIconWebsite, setImgRotationIconWebsite] =
    useState(defaultState);
  const [imgRotationIconStatus, setImgRotationIconStatus] =
    useState(defaultState);
  const [imgRotationIconEmail, setImgRotationIconEmail] =
    useState(defaultState);
  const [imgRotationIconName, setImgRotationIconName] = useState(defaultState);
  const [imgRotationIconNumber, setImgRotationIconNumber] =
    useState(defaultState);
  const resetActionCounter = useSelector(
    (state) => state.ViewSelectedFilterInfoUsers.resetActionCounter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortingStateInfoUser('reset'));
    setImgRotationIconWebsite(defaultState);
    setImgRotationIconStatus(defaultState);
    setImgRotationIconEmail(defaultState);
    setImgRotationIconName(defaultState);
    setImgRotationIconNumber(defaultState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetActionCounter]); // Reseting inputs

  const settingStatesForIconsRotation = (callbackSetState, typeSort) => {
    // setImgRotationIconDate(defaultState)
    if (typeSort === 'number') {
      dispatch(sortingStateInfoUser(typeSort));
    }
    if (typeSort === 'name') {
      dispatch(sortingStateInfoUser(typeSort));
    }
    if (typeSort === 'email') {
      dispatch(sortingStateInfoUser(typeSort));
    }
    if (typeSort === 'website') {
      dispatch(sortingStateInfoUser(typeSort));
    }
    if (typeSort === 'status') {
      dispatch(sortingStateInfoUser(typeSort));
    }

    setImgRotationIconWebsite(defaultState);
    setImgRotationIconStatus(defaultState);
    setImgRotationIconEmail(defaultState);
    setImgRotationIconName(defaultState);
    setImgRotationIconNumber(defaultState);
    callbackSetState('img-rotate-active');
  };

  return (
    <tr className="container-first-row-info-users">
      <HeaderTitlesInfoUser
        typeSort="number"
        title="#"
        imgRotationIcon={imgRotationIconNumber}
        setImgRotationIcon={setImgRotationIconNumber}
        settingStatesForIconsRotation={settingStatesForIconsRotation}
      />

      <HeaderTitlesInfoUser
        typeSort="name"
        title="Nombre"
        imgRotationIcon={imgRotationIconName}
        setImgRotationIcon={setImgRotationIconName}
        settingStatesForIconsRotation={settingStatesForIconsRotation}
      />

      <HeaderTitlesInfoUser
        typeSort="email"
        title="Correo"
        imgRotationIcon={imgRotationIconEmail}
        setImgRotationIcon={setImgRotationIconEmail}
        settingStatesForIconsRotation={settingStatesForIconsRotation}
      />

      <HeaderTitlesInfoUser
        typeSort="website"
        title="Web site"
        imgRotationIcon={imgRotationIconWebsite}
        setImgRotationIcon={setImgRotationIconWebsite}
        settingStatesForIconsRotation={settingStatesForIconsRotation}
      />

      <HeaderTitlesInfoUser
        typeSort="status"
        title="Estado"
        imgRotationIcon={imgRotationIconStatus}
        setImgRotationIcon={setImgRotationIconStatus}
        settingStatesForIconsRotation={settingStatesForIconsRotation}
      />
      <th>
        <button
          className="d-flex flex-row align-items-center btn-table ms-2"
          style={{ cursor: 'default' }}
        >
          Fecha
        </button>
      </th>

      <th scope="col">
        <button
          type="button"
          className="btn btn-secondary d-flex flex-row align-items-center btn-table justify-content-evenly"
          style={{ cursor: 'default' }}
        >
          Acciones
        </button>
      </th>
    </tr>
  );
};

export { HeadTable };
