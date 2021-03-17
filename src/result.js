import React from 'react'

function Results(props) {
    const {resultdata,isLoading}  = props.resultvalue;
   
    return( 
        <React.Fragment>
     {isLoading ? (
       <div>
           <table className="table table-striped table-hover" >
               <thead>
                   <tr>
                <th >Months </th>
                <th >payment value</th>
                <th >principal amount</th>
                <th >Interest Amount</th>
                <th>Loan Balance</th>
                </tr>
                </thead>
                <tbody>
           { resultdata && resultdata.map((result, index) => (
            
          <tr key={index}> 
            <td>{index===0? '' : index}</td>
             
             <td>{result.paymentvalue}</td>
             <td>{result.ppvalue}</td>
             <td>{result.intvalue}</td>
             <td>{result.balanceamount}</td>
          </tr>
       
          ))}
           </tbody>
           </table>
    
       </div>   
        
    
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <p className="text-center">...</p>
      )}
       </React.Fragment>     
     )

           }
export default Results;
