import React from "react";
import style from "./EmployeeCard.css";

function EmployeeCard(props) {
  const [visible, setVisible] = React.useState(false);
  const jobList = [
    'Лаборант',
    'Старший лаборант',
    'Ассистент',
    'Преподаватель',
    'Старший преподаватель',
    'Доцент',
    'Профессор', 
  ]
  
  

  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickJobList = (id) => {
    setActiveIndex(id);
    setOpen(false);
  }
  const [open, setOpen] = React.useState(false)

  const onClickNotVisible = () => {
    setVisible(false);
  };

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="employee-left">
          <div>
            <img className="employee__img" src={props.avatar} alt="" />
          </div>
        </div>
        <div className="employee-right">
          <div className="employee-right__wrapper">
            <p className="card__name">{props.name}</p>
            <div className="card__job-title">
              <p  onClick={() => setVisible(!visible)} className="card__job-name">Должность: {jobList[activeIndex]}</p>
              <svg
               onClick={() => setVisible(!visible)}
                className="card__plus-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                  fill="#000000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H19.5C19.7761 20 20 19.7761 20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H4.5Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>

          <div>
            <li className="card__info">
              <strong className="card__info-title">id</strong>
              <span className="card__info-values"> {props.id}</span>
            </li>
            <li className="card__info">
              <strong className="card__info-title">Номер телефона</strong>{" "}
              <span className="card__info-values">{props.phoneNumber}</span>{" "}
            </li>
            <li className="card__info">
              <strong className="card__info-title">email</strong>{" "}
              <span className="card__info-values">{props.email}</span>{" "}
            </li>
          </div>
        </div>
        {visible && (
          <div id="popup" className="card__job-popup">
            <div>
              <svg
                onClick={onClickNotVisible}
                className="popup__svg-close"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="#000000"
                />
              </svg>
              {open && ( 
                <ul className="jobList__popup">
              {jobList.map((name, id) => (
                  <li
                  key={id}
                  onClick={() => onClickJobList(id)}
                  className={activeIndex === id? 'job-list active' : 'job-list'}>
                  {name}
                  </li>
                ))}
            </ul>
               )}
          
              <p className="card__info">Должность: {jobList[activeIndex]}
              <svg
               onClick={() => setOpen(!open)}
                className="card__plus-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                  fill="#000000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7761 4.22386 20 4.5 20H19.5C19.7761 20 20 19.7761 20 19.5V4.5C20 4.22386 19.7761 4 19.5 4H4.5Z"
                  fill="#000000"
                />
              </svg></p>
              <p className="card__info">с:{props.firstDate}</p>
              <p className="card__info">по:{props.lastDate}</p>
              <p className="card__info">№ Приказа: {props.numberOrder}</p>
            </div>
            <button>Добавить</button>
            <button>Удалить</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeCard;
