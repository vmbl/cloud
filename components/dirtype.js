import React from "react";

class Dirtype extends React.Component {
  constructor(props) {
    super(props);
    console.log("input", props)
    //alert(props)
    var passedData = props.setdata
    this.state = {
      dataValue: `${passedData.dataValue}`,
      allFiles: passedData.allFiles,
      allRecent: passedData.allRecent,
      pathtype: passedData.pathtype,
      check: passedData
    };
    //this.getDerivedStateFromProps = this.handleInputChange.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("updated", props)
    return {
      dataValue: props.setdata.dataValue,
      allFiles: props.setdata.allFiles,
      allRecent: props.setdata.allRecent
    };

  }
  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  render() {
    //alert(this.state.check)
    const { dataValue } = this.state;
    const { allFiles } = this.state;
    const { allRecent } = this.state;
    const { pathtype } = this.state;
    //alert(allRecent.length)
    return (
     <table class="table table-bordered">
        <thead>
           
              <tr>
                  <th>Recent File Name</th>
                  <th>Last Modified</th>
                  <th>Size</th>
              </tr>
             {
              Object.entries(allRecent).map((value, indexv) => {
                var downLink = `/${dataValue}/${pathtype}/latest/${value[1].name}`
                return (

                  <tr>
                    <td><a href={downLink} target="_blank">{value[1].name}</a></td>
                    <td>{value[1].modified}</td>
                    <td>{value[1].size} KB</td>
                  </tr>
                );
              })
            }
          
          <tr>
            <td colspan="3" style={{ textAlign: 'center' }}>Track Versions</td>
          </tr>
          <tr>
              <th>File Name</th>
              <th>Last Modified</th>
              <th>Size</th>
          </tr>

        </thead>
        
        <tbody>
  
        {
          Object.entries(allFiles).map((value, index) => {
            var downLink = `/${dataValue}/${pathtype}/${value[1].name}`
            return (

              <tr>
                <td><a href={downLink} target="_blank">{value[1].name}</a></td>
                <td>{value[1].modified}</td>
                <td>{value[1].size} KB</td>
              </tr>
            );
          })
        }
      </tbody>
      </table>
    );
  }
}

export default Dirtype;
