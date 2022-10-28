import React from 'react';

const ModelAdvertising = ({
  id,
  label,
  img,
  title,
  title2,
  p1,
  p2,
  p3,
  p4,
  deleteTittle,
  children
}) => {
  // console.log(title)
  // console.log(title2)
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={label}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-content-size">
          <div className="modal-header modal-header-border d-flex flex-column justify-content-center">
            <img
              src={img}
              style={{ width: 80 }}
              data-bs-dismiss="offcanvas"
              alt="warning"
            />
          </div>

          {!deleteTittle && (
            <div className="modal-body d-flex flex-column align-items-center justify-content-around">
              <h2 className="p-margin text-center">{title}</h2>
              <h2 className="p-margin p-user-created-text-error--color text-center">
                {title2}
              </h2>
              <p className="p-margin p-user-created-text--color">{p1}</p>
              <p className="p-margin text-center">{p2}</p>
              <p className="p-margin p-user-created-text--color">{p3}</p>
              <p className="p-margin text-danger">{p4}</p>
            </div>
          )}

          {deleteTittle?.length > 0 && (
            <div className="modal-body d-flex flex-column align-items-center justify-content-center">
              <h2 className="p-margin text-center">{deleteTittle}</h2>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export { ModelAdvertising };
