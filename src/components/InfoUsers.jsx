import React, { useEffect, useState } from 'react';
import { HeaderInfoUsers } from '../components/HeaderInfoUsers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers, editingUserFromList } from '../slice/sliceUsers';
import { HeadTable } from './HeadTable';
import { BodyTable } from './BodyTable';
import { LiCurrentPagesPaginationFooter } from './LiCurrentPagesPaginationFooter';
import { MdNavigateNext } from 'react-icons/md';
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { OffCanvasEditUser } from '../components/OffCanvasEditUser';

const InfoUsers = () => {
  const dispath = useDispatch();
  const inputSearchWillBeFilter = useSelector(
    (state) => state.users.inputsSearch
  );
  const userInfo = useSelector((state) => state.users.list);
  const idUserWillBeEdit = useSelector((state) => state.users.idUserWillBeEdit);
  const filterSelectedViewUserInfo = useSelector(
    (state) => state.ViewSelectedFilterInfoUsers.count
  );
  const whenUserClickOnThePage = 'page-link-info-users-active';
  // console.log(userInfo)
  // console.log(inputSearchWillBeFilter)
  const [currentPage, setCurrentPage] = useState(0);
  // <FILTERING INFO>
  const inputSearchByNameLowerCase =
    inputSearchWillBeFilter.name?.toLowerCase();
  const inputSearchByEmailLowerCase =
    inputSearchWillBeFilter.email?.toLowerCase();
  const inputSearchByWebsiteLowerCase =
    inputSearchWillBeFilter.website?.toLowerCase();
  const inputSearchByselectedOption = inputSearchWillBeFilter.selectedOption;

  // console.log(inputSearchByWebsiteLowerCase)

  const filtrationBySearch = userInfo.filter((data) => {
    const dataNameToLowerCase = data.name.toLowerCase();
    const dataEmailToLowerCase = data.email.toLowerCase();
    const dataWebsiteToLowerCase = data.website.toLowerCase();
    // console.log(dataWebsiteToLowerCase)
    const arrayDataselectedOption = [data.status]; // I receive status no select option :v
    // to Verifie includes boolean, I need and array
    const infoMatchName = dataNameToLowerCase.includes(
      inputSearchByNameLowerCase
    );
    const infoMatchEmail = dataEmailToLowerCase.includes(
      inputSearchByEmailLowerCase
    );
    const infoMatchWebsite = dataWebsiteToLowerCase.includes(
      inputSearchByWebsiteLowerCase
    );
    const infoMatchselectedOption = arrayDataselectedOption.includes(
      inputSearchByselectedOption
    );
    // console.log(infoMatchWebsite)
    if (inputSearchWillBeFilter.name?.length !== 0) return infoMatchName;
    if (inputSearchWillBeFilter.email?.length !== 0) return infoMatchEmail;
    if (inputSearchWillBeFilter.website?.length !== 0) return infoMatchWebsite;
    if (inputSearchWillBeFilter.selectedOption.length !== 0)
      return infoMatchselectedOption;
  });
  // console.log(filtrationBySearch)
  const totalData =
    filtrationBySearch.length > 0 ? filtrationBySearch.length : userInfo.length;

  const filteredUsers = () => {
    const { name, email, selectedOption, website } = inputSearchWillBeFilter;
    if (
      name?.length === 0 &&
      email?.length === 0 &&
      website?.length === 0 &&
      selectedOption.length === 0
    ) {
      return userInfo?.slice(
        currentPage,
        currentPage + filterSelectedViewUserInfo
      );
    }

    return filtrationBySearch.slice(
      currentPage,
      currentPage + filterSelectedViewUserInfo
    );
  };
  // console.log(filteredUsers())
  // <Handle Next - Prev Page >
  // in NextPage i need show to the user a tottal count of the info with the length but dinamic render
  // because depent if the user are useing a filter or no.
  const handleNextPage = () => {
    let sumAvoidNextLasPageParNumber = 0;

    if (filterSelectedViewUserInfo === 3) {
      sumAvoidNextLasPageParNumber = filterSelectedViewUserInfo;
    } else if (filterSelectedViewUserInfo === 2) {
      sumAvoidNextLasPageParNumber = filterSelectedViewUserInfo;
    } else if (filterSelectedViewUserInfo === 7) {
      sumAvoidNextLasPageParNumber = filterSelectedViewUserInfo;
    } else {
      sumAvoidNextLasPageParNumber = filterSelectedViewUserInfo + 1;
    } // because only arrive to 7 to 9  when we select 3 or 2 and need to see the 10

    if (
      currentPage <
      (filtrationBySearch.length
        ? filtrationBySearch.length
        : userInfo.length) -
        sumAvoidNextLasPageParNumber
    ) {
      setCurrentPage(currentPage + filterSelectedViewUserInfo);
    }
  };

  const handlePrevPage = () => {
    if (currentPage >= filterSelectedViewUserInfo) {
      setCurrentPage(currentPage - filterSelectedViewUserInfo);
    }
  };
  // < EFFECTS >
  useEffect(() => {
    dispath(fetchAllUsers());
  }, []);

  useEffect(() => {
    setCurrentPage(0); // i need reset the pagination because will not show the current page more
  }, [filterSelectedViewUserInfo, inputSearchWillBeFilter]);

  // console.log(idUserWillBeEdit)
  const infoUserWillBeEdit = userInfo.find(
    (user) => user.id === idUserWillBeEdit
  );
  // console.log(inputNameEmailWebsiteNewUserStatus.status)
  const [
    inputNameEmailWebsiteNewUserStatus,
    setInputNameEmailWebsiteNewUserStatus
  ] = useState({
    name: '',
    email: '',
    website: '',
    status: ''
  });

  useEffect(() => {
    if (infoUserWillBeEdit) {
      setInputNameEmailWebsiteNewUserStatus({
        name: infoUserWillBeEdit.name,
        email: infoUserWillBeEdit.email,
        website: infoUserWillBeEdit.website,
        status: infoUserWillBeEdit.status
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUserWillBeEdit]);

  const handleSubmitEditUser = (e) => {
    e.preventDefault();
    dispath(editingUserFromList(inputNameEmailWebsiteNewUserStatus));
  };

  const handleOnchangeEmailWebsiteNewUser = (e) => {
    setInputNameEmailWebsiteNewUserStatus({
      ...inputNameEmailWebsiteNewUserStatus,
      [e.target.name]: e.target.value
    }); // after we adde the shortName
  };

  return (
    <div className="container-info-user-by-datas my-4 px-0">
      <OffCanvasEditUser // defined in BodyTable Btn Edit
        idOffCanvas="offcanvasRightEditUser"
        onlyView={false}
        title="Editar Usuario"
        nameActionButton="Guardar Cambios"
        handleSubmit={handleSubmitEditUser}
        handleOnchangeinputsData={handleOnchangeEmailWebsiteNewUser}
        inputsData={inputNameEmailWebsiteNewUserStatus}
      />

      <OffCanvasEditUser // defined in BodyTable Btn Edit
        idOffCanvas="offcanvasRightViewUser"
        title="Ver Usuario"
        onlyView={true}
        inputsData={inputNameEmailWebsiteNewUserStatus}
      />

      <div className="body-card">
        <HeaderInfoUsers />
        <div className="table-responsive">
          <table className="table table-sm">
            <thead className="thead-light">
              <HeadTable />
            </thead>
            <tbody className="container-tr-tbody">
              <BodyTable filteredUsers={filteredUsers} />
            </tbody>
          </table>
        </div>

        {
          (inputSearchWillBeFilter.name.length > 0 ||
            inputSearchWillBeFilter.email.length > 0 ||
            inputSearchWillBeFilter.website.length > 0 ||
            inputSearchWillBeFilter.selectedOption.length > 0) && // we check All of them if only one is truly so we need see if the filtrationBySearch es 0
          filtrationBySearch.length === 0 ? (
            <div className="d-flex justify-content-center my-5">
              <img
                src="https://i.ibb.co/qYppJQ2/not-results.png"
                alt="not found results"
              />
            </div>
          ) : (
            // <>
            <div className="col table-footer-info-users d-flex flex-row align-items-center justify-content-between">
              <div className="container container-paginatio-nav">
                <div className="row h-100">
                  <div className="col col-info-pagination">
                    <p className="mb-0">
                      {`Viendo del ${currentPage + 1} a ${
                        filteredUsers().length + currentPage
                      } de ${totalData}`}
                    </p>
                  </div>

                  <div className="col col-btn-selecting-pagination pb-2">
                    <nav aria-label="Page navigation example ">
                      <ul className="pagination mb-0 align-items-center">
                        <span
                          className="prev-page-link-info-users"
                          aria-label="Previous"
                          onClick={handlePrevPage}
                        >
                          <MdOutlineNavigateBefore className="icon-prev-page" />
                        </span>

                        <ul className="pagination mb-0 align-items-center container-ul-items-page">
                          <LiCurrentPagesPaginationFooter
                            numberPage="1"
                            className={`page-link page-link-info-users ${
                              currentPage === 0 ? whenUserClickOnThePage : ''
                            }`}
                            onClick={() => setCurrentPage(0)}
                          />

                          <LiCurrentPagesPaginationFooter
                            onClick={() =>
                              setCurrentPage(filterSelectedViewUserInfo)
                            }
                            numberPage="2"
                            className={`page-link page-link-info-users ${
                              currentPage === filterSelectedViewUserInfo
                                ? whenUserClickOnThePage
                                : ''
                            }`}
                          />

                          {Math.ceil(totalData / filterSelectedViewUserInfo) >=
                            3 && (
                            <LiCurrentPagesPaginationFooter
                              onClick={() =>
                                setCurrentPage(filterSelectedViewUserInfo * 2)
                              }
                              numberPage="3"
                              className={`page-link page-link-info-users ${
                                currentPage === filterSelectedViewUserInfo * 2
                                  ? whenUserClickOnThePage
                                  : ''
                              }`}
                            />
                          )}

                          {Math.ceil(totalData / filterSelectedViewUserInfo) >=
                            4 && (
                            <LiCurrentPagesPaginationFooter
                              onClick={() =>
                                setCurrentPage(filterSelectedViewUserInfo * 3)
                              }
                              numberPage="4"
                              className={`page-link page-link-info-users ${
                                currentPage === filterSelectedViewUserInfo * 3
                                  ? whenUserClickOnThePage
                                  : ''
                              }`}
                            />
                          )}

                          {Math.ceil(totalData / filterSelectedViewUserInfo) >=
                            5 && (
                            <LiCurrentPagesPaginationFooter
                              onClick={() =>
                                setCurrentPage(filterSelectedViewUserInfo * 4)
                              }
                              numberPage="5"
                              className={`page-link page-link-info-users ${
                                currentPage === filterSelectedViewUserInfo * 4
                                  ? whenUserClickOnThePage
                                  : ''
                              }`}
                            />
                          )}

                          {Math.ceil(totalData / filterSelectedViewUserInfo) >=
                            6 && (
                            <LiCurrentPagesPaginationFooter
                              onClick={() =>
                                setCurrentPage(filterSelectedViewUserInfo * 5)
                              }
                              numberPage="6"
                              className={`page-link page-link-info-users ${
                                currentPage === filterSelectedViewUserInfo * 5
                                  ? whenUserClickOnThePage
                                  : ''
                              }`}
                            />
                          )}

                          {window.screen.width > 360 &&
                            Math.ceil(totalData / filterSelectedViewUserInfo) >=
                              7 && (
                              <LiCurrentPagesPaginationFooter
                                onClick={() =>
                                  setCurrentPage(filterSelectedViewUserInfo * 6)
                                }
                                numberPage="7"
                                className={`page-link page-link-info-users ${
                                  currentPage === filterSelectedViewUserInfo * 6
                                    ? whenUserClickOnThePage
                                    : ''
                                }`}
                              />
                            )}
                        </ul>

                        <span
                          className="next-page-link-info-users"
                          aria-label="Next"
                          onClick={handleNextPage}
                        >
                          <MdNavigateNext className="icon-next-page" />
                        </span>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )
          // </>
        }
      </div>
    </div>
  );
};

export { InfoUsers };
