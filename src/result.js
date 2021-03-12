import React from 'react'

function Results({resultvalue}) {
    const Resultdata  = resultvalue;
       
    return( 
       <div>
           <table className="table">
                <th scope="col">Months</th>
                <th scope="col">payment value</th>
                <th scope="col">principal amount</th>
                <th scope="col">Interest Amount</th>
                <th scope="col">Loan Balance</th>
           {Resultdata && Resultdata.map((result, index) => 
        
            
          <tr key={index} > 
            <td>{index} </td>
             <td>{result.paymentvalue}</td>
             <td>{result.ppvalue}</td>
             <td>{result.intvalue}</td>
             <td>{result.balanceamount}</td>
          </tr>
          
           )}
           </table>
    
       </div>        
     )

    }
export default Results;
