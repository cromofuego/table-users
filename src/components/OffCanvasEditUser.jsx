import React, { Fragment } from 'react';
import { ModelAdvertising } from '../components/ModelAdvertising';

let resultVerification = null;
let sucessCreatingUsertoggleModal = {
  offCanvas: false,
  sucessCreateUserDataBsTarget: false,
  sucessCreateUserDataBsToggle: false
};

let sureDoNotContinueCreatingUsertoggleModal = {
  offCanvas: false,
  sureDoNotContinueDataBsTarget: false,
  sureDoNotContinueDataBsToggle: false
};

const OffCanvasEditUser = ({
  handleSubmit,
  handleOnchangeinputsData,
  setInputNameEmailWebsiteNewUser,
  inputsData,
  title,
  nameActionButton,
  idOffCanvas,
  onlyView
}) => {
  if (inputsData.status === 'true') resultVerification = null;
  if (inputsData.status === 'false') resultVerification = null;

  if (
    inputsData.website.length > 0 &&
    inputsData.name.length > 0 &&
    inputsData.email.length > 0
  ) {
    if (inputsData.status !== 'Estado' && inputsData.status !== '') {
      console.log('xd');
      sucessCreatingUsertoggleModal.offCanvas = true;
      sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget = true;
      sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle = true;
    }
  } else {
    sucessCreatingUsertoggleModal.offCanvas = false;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget = false;
    sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle = false;
  }
  // console.log((inputsData.status !== 'Estado'), (inputsData.status !== ''))

  if (
    inputsData.website.length > 0 ||
    inputsData.name.length > 0 ||
    inputsData.email.length > 0
  ) {
    if (inputsData.status !== 'Estado' || inputsData.status !== '') {
      // sureDoNotContinueCreatingUsertoggleModal.offCanvas = true;
      sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsTarget = true;
      sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsToggle = true;
    }
  } else {
    // sureDoNotContinueCreatingUsertoggleModal.offCanvas = false;
    sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsTarget = false;
    sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsToggle = false;
  }

  const onClickSucessActionUser = (value) => {
    if (sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget === true) {
      setTimeout(() => {
        setInputNameEmailWebsiteNewUser({
          name: '',
          email: '',
          website: '',
          status: ''
        });
      }, 1000);
    }

    if (value === 'Estado') {
      resultVerification = (
        <div className="text-danger">debes elejir un estado</div>
      );
    }
    if (value === '') {
      resultVerification = (
        <div className="text-danger">debes elejir un estado</div>
      );
    }
    // console.log(resultVerification)
  };
  return (
    <>
      <ModelAdvertising
        img="https://cdn-icons-png.flaticon.com/512/58/58816.png?w=360"
        title="¿Deseas guardar los cambios?"
        p4="Después de aprobar la acción, no se puede deshacer."
        id="editingInfoUser"
        label="user editing info"
      >
        <div className="modal-footer modal-footer-border d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary-modal btn-green"
            data-bs-dismiss="modal"
            data-bs-target="#suceesUserCreated"
            data-bs-toggle="modal"
            onClick={handleSubmit}
          >
            Aceptar
          </button>
          <button
            type="button"
            className="btn btn-secondary-modal--cancel"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
        </div>
      </ModelAdvertising>

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
                {onlyView && (
                  <button
                    type="button"
                    className="btn btn-success btn-green"
                    data-bs-dismiss="offcanvas"
                  >
                    Cancelar
                  </button>
                )}

                {!onlyView && (
                  <Fragment>
                    {title === 'Agregar Nuevo Usuario' && (
                      <>
                        <button
                          type="submit"
                          className="btn btn-success btn-green me-3"
                          onClick={() =>
                            onClickSucessActionUser(inputsData.status)
                          }
                          data-bs-target={
                            sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget &&
                            '#suceesUserAddModal'
                          }
                          data-bs-toggle={
                            sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle &&
                            'modal'
                          }
                        >
                          {nameActionButton}
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-green"
                          data-bs-dismiss="offcanvas"
                          data-bs-target={
                            sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsTarget &&
                            '#sureDoNotContinueCreateingUser'
                          }
                          data-bs-toggle={
                            sureDoNotContinueCreatingUsertoggleModal.sureDoNotContinueDataBsToggle &&
                            'modal'
                          }
                        >
                          Cancelar
                        </button>
                      </>
                    )}

                    {title === 'Editar Usuario' && (
                      <>
                        <button
                          type="button"
                          className="btn btn-success btn-green me-3"
                          onClick={() =>
                            onClickSucessActionUser(inputsData.status)
                          }
                          data-bs-target={
                            sucessCreatingUsertoggleModal.sucessCreateUserDataBsTarget &&
                            '#editingInfoUser'
                          }
                          data-bs-toggle={
                            sucessCreatingUsertoggleModal.sucessCreateUserDataBsToggle &&
                            'modal'
                          }
                        >
                          {nameActionButton}
                        </button>

                        <button
                          type="button"
                          className="btn btn-success btn-green"
                          data-bs-dismiss="offcanvas"
                        >
                          Cancelar
                        </button>
                      </>
                    )}
                  </Fragment>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export { OffCanvasEditUser };
