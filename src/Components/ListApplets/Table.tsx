import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Table.module.css';

const Table = (props) => {
  const { header, blockDatas, page, changeTarget, targetRow } = props;

  console.log(blockDatas); //массив из 2 массивов
  return (
    <table>
      <thead>
        <tr>
          {header.elements.map((col) => {
            return <td key={col.id}>{col.title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {blockDatas[page].map((row) => {
          return (
            <tr key={row.id} id={row.id} onClick={changeTarget}>
              {header.elements.map((col, index) => {
                return (
                  <td
                    key={index}
                    className={+targetRow === row.id ? 'active_row' : ''}
                  >
                    {row[col.id]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

// <table>
//       <thead>
//         <tr>
//           {header.elements.map((col) => {
//             return <td key={col.id}>{col.title}</td>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {blockDatas[page].map((row, index) => {
//           return (
//             <tr key={row[0]} id={row[0]} onClick={changeTarget}>
//               {row.map((col, index) => {
//                 if (index === 1) {
//                   return (
//                     <td
//                       key={index}
//                       className={+targetRow === row[0] ? 'active_row' : ''}
//                     >
//                       <Link className={styles.go_in} to={row[0].toString()}>
//                         {col || 'Не указан'}
//                       </Link>
//                     </td>
//                   );
//                 } else {
//                   return (
//                     <td
//                       key={index}
//                       className={+targetRow === row[0] ? 'active_row' : ''}
//                     >
//                       {col || 'Не указан'}
//                     </td>
//                   );
//                 }
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
