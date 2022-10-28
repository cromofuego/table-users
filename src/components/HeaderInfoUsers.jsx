import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCountSelect,
  buttonResetAllFilter
} from '../slice/sliceViewSelectedFilterInfoUsers';
import { addNewUserToList, setInputsSearch } from '../slice/sliceUsers';
import { MdRefresh } from 'react-icons/md';
import { OffCanvasEditUser } from './OffCanvasEditUser';
import { AppContext } from '../context';

const HeaderInfoUsers = () => {
  const { inputNameEmailWebsiteNewUser, setInputNameEmailWebsiteNewUser } =
    useContext(AppContext);

  const [inputSearchByWebsite, setInputSearchByWebsite] = useState('');
  const dispatch = useDispatch();
  const inputSearchWillBeFilter = useSelector(
    (state) => state.users.inputsSearch
  );
  // const totalLengthDataAboutUsers = useSelector(state => state.users.list);
  const resetActionCounter = useSelector(
    (state) => state.ViewSelectedFilterInfoUsers.resetActionCounter
  );
  const { name, email, selectedOption } = inputSearchWillBeFilter;
  // console.log(totalLengthDataAboutUsers)
  useEffect(() => {
    if (name.length > 0 || email.length > 0 || selectedOption.toString()) {
      // need string becaus eif return false does nto work
      resetInputWebsiteFromSearchFilter();
    }
  }, [name, email, selectedOption]);

  useEffect(() => {
    setInputSearchByWebsite('');
    dispatch(
      setInputsSearch({
        website: '',
        name: '',
        email: '',
        selectedOption: ''
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetActionCounter]); // Reseting inputs

  const onClickResetAllFilters = () => {
    dispatch(buttonResetAllFilter(1)); // we sum 1 at state so the useEffect Will be reset
  };

  const resetInputWebsiteFromSearchFilter = () => {
    setInputSearchByWebsite('');
  };

  const handleSelectedChange = (e) => {
    dispatch(setCountSelect(e.target.value));
  };

  const handleInputWebsite = (e) => {
    setInputSearchByWebsite(e.target.value);
    dispatch(
      setInputsSearch({
        website: e.target.value,
        id: '',
        name: '',
        email: '',
        selectedOption: ''
      })
    );
  };

  // console.log(inputNameEmailWebsiteNewUser)
  const handleOnchangeEmailWebsiteNewUser = (e) => {
    setInputNameEmailWebsiteNewUser({
      ...inputNameEmailWebsiteNewUser,
      [e.target.name]: e.target.value
    }); // after we adde the shortName
  };

  const handleSubmitNewUser = (e) => {
    // console.log(inputNameEmailWebsiteNewUser)
    e.preventDefault();
    dispatch(addNewUserToList(inputNameEmailWebsiteNewUser));
  };
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col m-3">Usuarios</div>
          <div className="col offset-md-3 d-flex align-items-center justify-content-end">
            <button
              className="btn btn-success mx-2 btn-green"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRightAddNewUser"
              aria-controls="offcanvasRightAddNewUser"
            >
              Agregar Usuario
            </button>

            <OffCanvasEditUser
              onlyView={false}
              idOffCanvas="offcanvasRightAddNewUser"
              title="Agregar Nuevo Usuario"
              nameActionButton="Agregar"
              handleSubmit={handleSubmitNewUser}
              handleOnchangeinputsData={handleOnchangeEmailWebsiteNewUser}
              inputsData={inputNameEmailWebsiteNewUser}
              setInputNameEmailWebsiteNewUser={setInputNameEmailWebsiteNewUser}
            />

            {/* <button type="button" className="btn btn-success">Export</button> */}
          </div>
        </div>
      </div>
      <div className="line-through"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 my-3 d-flex flex-row align-items-center justify-content-around col-view-pagination">
            Ver
            <select
              onChange={handleSelectedChange}
              className="form-select select-info-users-filtered mx-3"
              aria-label="Default select example"
            >
              <option defaultValue={2}>{2}</option>
              <option value={4}>{4}</option>
              <option value={6}>{6}</option>
              <option value={8}>{8}</option>
            </select>
            <MdRefresh
              className="img-reset-all-filters"
              onClick={onClickResetAllFilters}
              alt="reload"
            />
          </div>
          <div className="col-12 col-md-4 offset-md-4 d-flex align-items-center justify-content-end my-4 col-input-search">
            <label className="w-50" htmlFor="inputTextSearchWebsite">
              Sitio Web
            </label>
            <input
              onChange={handleInputWebsite}
              type="text"
              className="form-control mx-2"
              id="inputTextSearchWebsite"
              placeholder="Nombre Sitio Web"
              value={inputSearchByWebsite}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { HeaderInfoUsers };
