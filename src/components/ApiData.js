import React from "react";

class ApiData extends React.Component {

     // headings for table
    // headings = [
    //     { image: "Image" },
    //     { first: "first" },
    //     { phone: "Phone" },
    //     { name: "email" },
    //     { dob: "DOB" },
    // ]

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      componentDidMount() {
        fetch("https://randomuser.me/api/?results=100")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                results: result.results,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, results } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div>
             <table>
               {results.map(results => (
                   
    
                <tr>
     

                    <td key={results.name.first} >
                      <td> {results.name.first} </td>

                    <td key={results.name.last} >
                      <td> {results.name.last} </td>

                    <td key={results.email}>
                      <td> {results.email} </td>

                    <td key={results.phone} >
                        <td> {results.phone} </td>

                    {/* need to update to date format */}
                    <td key={results.dob.age} >
                        <td> {results.dob.age} </td>

                    {/* Add image from API call */}

                                      </td>
                                  </td>
                             </td>
                        </td>
                    </td>
                </tr>
                
              ))}
             </table>
              </div>

          );
        }
      }
    }


export default ApiData;