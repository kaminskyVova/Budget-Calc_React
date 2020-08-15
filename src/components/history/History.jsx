import React from "react";

import HistoryItem from "./HistoryItem";



const History = ({ transactions }) => (
  <section className="history">
    <h3>История расходов</h3>
    <ul className="history__list">

    {transactions.map(item => <HistoryItem 
        key={item.id}
        transaction={item} 
        />
      )} 

      {/* <li className="history__item history__item-plus">
        Получил зарплату
        <span className="history__money">+30000 ₽</span>
        <button className="history__delete">x</button>
      </li>

      <li className="history__item  history__item-minus">
        Отдал долг
        <span className="history__money">-10000 ₽</span>
        <button className="history__delete">x</button>
      </li> */}
    </ul>
  </section>
);

export default History;
