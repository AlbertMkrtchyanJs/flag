import React, { useContext, useEffect, useState } from "react";
import { API } from "../../api/api";
import { MdManageSearch } from "react-icons/md";
import { MyContext } from "../../Data/context";
import { changeTextAC } from "../../store/store";
import { NavLink } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";

import style from "./Header.module.css";

const Header = () => {
  const { reg, search, text, dispatch } = useContext(MyContext);

  useEffect(() => {
    if (text.length > 1) {
      API.getSearch(dispatch, text);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [text]);

  const [isOpen, setIsOpen] = useState(false);

  const filterReg = (r) => {
    API.getRegion(dispatch, r);
  };

  return (
    <div className={style.header}>
       <NavLink  className={style.home} to={'/'}><RiHome4Fill /></NavLink>
      <button className={style.butt} onClick={() => API.getAll(dispatch)}>
        All
      </button>
      {reg.map((r) => (
        <button className={style.butt} key={r} onClick={() => filterReg(r)}>
          {r}
        </button>
      ))}
      <div className={style.search}>
        <MdManageSearch style={{ fontSize: "25px", color: "white" }} />
        <input
          type="saerch"
          className={style.inp}
          value={text}
          onChange={(e) => dispatch(changeTextAC(e.target.value))}
        />
        {isOpen && (
          <div className={style.searchBlock}>
            {search.map((s) => {
              return (
                <div>
                  <NavLink
                    onClick={
                      () => {setIsOpen(false)
                      dispatch(changeTextAC(''))}
                    }
                    to={`/flag/${s?.name?.common}`}
                  >
                    {
                      <div>
                        <p>{s?.name?.common}</p>
                        <img src={s.flags.png} width={100} height={75} />
                      </div>
                    }
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
