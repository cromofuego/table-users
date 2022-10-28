import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputsSearch } from '../slice/sliceUsers';

const FilteredBySearch = () => {
  const defaultValueSelectOption = 'Estado';
  const dispatch = useDispatch();
  const inputSearchWillBeFilter = useSelector(
    (state) => state.users.inputsSearch
  );
  const resetActionCounter = useSelector(
    (state) => state.ViewSelectedFilterInfoUsers.resetActionCounter
  );
  // console.log(resetActionCounter)
  // console.log(inputSearchWillBeFilter.name)
  const { website } = inputSearchWillBeFilter;

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState(
    defaultValueSelectOption
  );
  // console.log(website.lenght)
  useEffect(() => {
    if (website) {
      resetInputNameEmailSelectOption();
    }
  }, [website]);

  useEffect(() => {
    setSelectedOption(defaultValueSelectOption);
    setInputName('');
    setInputEmail('');
    dispatch(
      setInputsSearch({
        website: '',
        name: '',
        email: '',
        selectedOption: ''
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetActionCounter]); // Reseting All inputs

  const resetInputNameEmailSelectOption = () => {
    setSelectedOption(defaultValueSelectOption);
    setInputName('');
    setInputEmail('');
  };

  const handleInputName = (e) => {
    // setSelectedOption(defaultValueSelectOption)
    // setInputEmail('')
    setInputName(e.target.value);
    dispatch(
      setInputsSearch({
        name: e.target.value,
        email: '',
        selectedOption: '',
        website: ''
      })
    );
  };

  const handleInputEmail = (e) => {
    // setSelectedOption(defaultValueSelectOption)
    // setInputName('')
    setInputEmail(e.target.value);
    dispatch(
      setInputsSearch({
        email: e.target.value,
        name: '',
        selectedOption: '',
        website: ''
      })
    );
  };

  const handleInputSelect = (e) => {
    setSelectedOption(e.target.value);
    // setInputName('')
    // setInputEmail('')

    if (e.target.value === 'Activo') {
      dispatch(
        setInputsSearch({
          selectedOption: true,
          email: '',
          name: '',
          website: ''
        })
      );
      return;
    }

    dispatch(
      setInputsSearch({
        selectedOption: false,
        email: '',
        name: '',
        website: ''
      })
    );
  };

  return (
    <form className="card filtered-by-searchs">
      <h5 className="mx-4 my-2">Filtros de busqueda</h5>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 my-2">
              <div className="form-group">
                <label htmlFor="filterByNameUser" className="my-1">
                  Nombre
                </label>
                <input
                  type="email"
                  onChange={handleInputName}
                  className="form-control"
                  id="filterByNameUser"
                  placeholder="Nombre del Usuario"
                  value={inputName}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 my-2">
              <div className="form-group">
                <label htmlFor="filterByEmailUser" className="my-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  onChange={handleInputEmail}
                  className="form-control"
                  id="filterByEmailUser"
                  placeholder="Correo Electrónico"
                  value={inputEmail}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-2">
              <div className="form-group">
                <label
                  className="text-center my-1"
                  htmlFor="selectFilterByStatus"
                >
                  Estado
                </label>
                <select
                  className="form-control form-select text-muted"
                  onChange={handleInputSelect}
                  id="selectFilterByStatus"
                  value={selectedOption}
                >
                  <option defaultValue={selectedOption}>
                    {selectedOption}
                  </option>
                  <option className="text-dark">Activo</option>
                  <option className="text-dark">Inactivo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export { FilteredBySearch };
