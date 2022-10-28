import React from 'react';

let resultVerification = null;
let sucessCreatingUsertoggleModal = {
  offCanvas: false,
  sucessCreateUserDataBsTarget: false,
  sucessCreateUserDataBsToggle: false
};
const OffCanvas2 = ({
  handleSubmit,
  handleOnchangeinputsData,
  inputsData,
  title,
  nameActionButton,
  idOffCanvas,
  onlyView,
  children
}) => {
  const onClickSucessActionUser = (value) => {
    if (value === 'Estado') {
      return (resultVerification = (
        <div className="text-danger">debes elejir un estado</div>
      ));
    }
    if (value === '') {
      return (resultVerification = (
        <div className="text-danger">debes elejir un estado</div>
      ));
    }
    // setToggleOffCanvas(false)
    // console.log(resultVerification)
  };

  if (inputsData.status === 'true') resultVerification = null;
  if (inputsData.status === 'false') resultVerification = null;
  // console.log(inputsData.status === 'true') resultVerification = null
  // console.log(inputsData.status === 'false') resultVerification = null

  if (
    inputsData.website.length > 0 &&
    inputsData.name.length > 0 &&
    inputsData.email.length > 0 &&
    inputsData.status !== 'Estado' &&
    inputsData.status !== ''
  ) {
    sucessCreatingUsertoggleModal.offCanvas = true;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget = true;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle = true;
  } else {
    sucessCreatingUsertoggleModal.offCanvas = false;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget = false;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle = false;
  }

  if (
    inputsData.website.length > 0 &&
    inputsData.name.length > 0 &&
    inputsData.email.length > 0 &&
    inputsData.status !== 'Estado' &&
    inputsData.status !== ''
  ) {
    sucessCreatingUsertoggleModal.offCanvas = true;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget = true;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle = true;
  } else {
    sucessCreatingUsertoggleModal.offCanvas = true;
  }

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id={idOffCanvas}
        aria-labelledby={`label-${idOffCanvas}`}
      >
        <div className="offcanvas-header header-off-canvas">
          <h5 id={`label-${idOffCanvas}`}>{title}</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="inputNameUser"
                className="form-label label-asterisk-data-required"
              >
                Nombres
              </label>
              <input
                disabled={onlyView}
                required
                name="name"
                onChange={handleOnchangeinputsData}
                type="text"
                className="form-control"
                id="inputNameUser"
                placeholder="Nombre de Usuario"
                value={inputsData.name}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="inputEmailUser"
                className="form-label label-asterisk-data-required"
              >
                Correo Electrónico
              </label>
              <input
                disabled={onlyView}
                required
                name="email"
                onChange={handleOnchangeinputsData}
                type="text"
                className="form-control"
                id="inputEmailUser"
                placeholder="Correo Electrónico"
                value={inputsData.email}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="inputNameUser"
                className="form-label label-asterisk-data-required"
              >
                Sitio Web
              </label>
              <input
                disabled={onlyView}
                required
                name="website"
                onChange={handleOnchangeinputsData}
                type="text"
                className="form-control"
                id="inputNameUser"
                placeholder="Sitio Web"
                value={inputsData.website}
              />
            </div>

            <div className="form-group">
              <label
                className="text-center label-asterisk-data-required"
                htmlFor="selectFilterByStatus"
              >
                Estado
              </label>
              <select
                disabled={onlyView}
                className="form-control form-select text-muted"
                onChange={handleOnchangeinputsData}
                id="selectFilterByStatus"
                name="status"
                value={inputsData.status}
              >
                <option
                  defaultValue={inputsData.status ? 'Activo' : 'Inactivo'}
                >
                  Estado
                </option>
                <option className="text-dark" value={true}>
                  Activo
                </option>
                <option className="text-dark" value={false}>
                  Inactivo
                </option>
              </select>
              {resultVerification}
            </div>

            <div className="mt-5">
              {!onlyView && (
                <button
                  type="submit"
                  className="btn btn-success me-3"
                  onClick={() => onClickSucessActionUser(inputsData.status)}
                  data-bs-target={
                    sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget &&
                    '#suceesUserAddModal'
                  }
                  data-bs-toggle={
                    sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle &&
                    'modal'
                  }
                  // data-bs-dismiss='offcanvas'
                >
                  {nameActionButton}
                </button>
              )}

              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="offcanvas"
                data-bs-toggle={
                  sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle &&
                  'modal'
                }
              >
                Cancelar
              </button>
            </div>
            {children}
          </form>
        </div>
      </div>
    </>
  );
};

export { OffCanvas2 };
