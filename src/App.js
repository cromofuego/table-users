import React, { useContext } from 'react';
import { AppContext } from './context';
import { ModelAdvertising } from './components/ModelAdvertising';
import { FilteredBySearch } from './components/FilteredBySearch';
import { InfoUsers } from './components/InfoUsers';
import './style/Main.scss';
import { useDispatch } from 'react-redux';
import { removingUserFromList } from './slice/sliceUsers';
import { Navbar } from './components/Navbar';

function App() {

  const dispatch = useDispatch();

  const {
    setInputNameEmailWebsiteNewUser,
    idUserShouldBeRemove,
  } = useContext(AppContext)

  const handleClickRemoveUser = () => {
    dispatch(removingUserFromList(idUserShouldBeRemove))
  }

  const resetInputsNewUser = () => {
    setInputNameEmailWebsiteNewUser({
      name: '',
      email: '',
      website: '',
      status: '',
    })
  }

  return (


    <div className="container mt-3">
      <Navbar />
      {/* <ClassComponent props='props que mas esperabas?' /> */}
      <div className='row gx-0'>
        <FilteredBySearch />
      </div>
      <div className='row gx-0'>
        <InfoUsers />
      </div>


      <ModelAdvertising
        img='https://cdn-icons-png.flaticon.com/512/58/58816.png?w=360'
        deleteTittle='¿Estas seguro de eliminar el usuario seleccionado?'
        id='deletingUser'
        label='user delete info'
      >

        <div className="modal-footer modal-footer-border d-flex justify-content-center">
          <button type="button" className="btn btn-secondary-modal" data-bs-dismiss="modal" onClick={handleClickRemoveUser}>Aceptar</button>
          <button type="button" className="btn btn-secondary-modal--cancel" data-bs-dismiss="modal">Cancelar</button>
        </div>
      </ModelAdvertising >

      <ModelAdvertising
        img='https://svgsilh.com/png-1024/98739.png'
        title2='¿Estas seguro de cancelar la creación del usuario?'
        p2='La información diligenciada se perderá, Esta acción es irreversible'
        id='sureDoNotContinueCreateingUser'
        label='sure not continue?'
      >
        <div className="modal-footer modal-footer-border d-flex justify-content-center">
          <button type="button" className="btn btn-secondary-modal" data-bs-dismiss="modal" onClick={resetInputsNewUser}>Continuar</button>
          <button type="button" className="btn btn-secondary-modal--cancel" data-bs-dismiss="modal">Cancelar</button>
          {/* estyles for button and modal footer is in ModelAdvertising */}
        </div>
      </ModelAdvertising >


      <ModelAdvertising
        img='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        title='¡El usuario ha sido creado satisfactoriamente!'
        p1='Hemos enviado un correo de activación a:'
        p2='xxxxx@xxxxx.com'
        id='suceesUserAddModal'
        label='creating user'
      >
        <div className="modal-footer modal-footer-border d-flex justify-content-center">
          <button type="button" className="btn btn-secondary-modal" data-bs-dismiss="modal">Continuar</button>
        </div>
      </ModelAdvertising >


      <ModelAdvertising
        img='https://icons-for-free.com/iconfiles/png/512/checked-1319964829840610150.png'
        title='MUY BIEN!'
        p2='Los cambios han sido guardados satisfactoriamente.'
        id='suceesUserCreated'
        label='user created'
      >
        <div className="modal-footer modal-footer-border d-flex justify-content-center">
          <button type="button" className="btn btn-secondary-modal" data-bs-dismiss="modal">Continuar</button>
        </div>
      </ModelAdvertising >

    </div >
  );
}

export default App;
