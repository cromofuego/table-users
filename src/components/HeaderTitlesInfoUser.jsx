import React from 'react';

const HeaderTitlesInfoUser = ({
  title,
  imgRotationIcon,
  setImgRotationIcon,
  settingStatesForIconsRotation,
  typeSort
}) => {
  const imgLink =
    'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png';

  return (
    <th>
      <button
        className="d-flex flex-row align-items-center btn-table ms-2"
        onClick={() =>
          settingStatesForIconsRotation(setImgRotationIcon, typeSort)
        }
      >
        {title}
        <img
          className={`mx-1 img-rotate-inactive ${imgRotationIcon}`}
          src={imgLink}
          style={{ width: 10 }}
          alt="filter icon"
        />
      </button>
    </th>
  );
};

export { HeaderTitlesInfoUser };
