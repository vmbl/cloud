import React from "react";
import Layout from '../components/layout'
import Head from 'next/head'

const lookup = {
  int: [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
  ],
  abc: [
    { id: "a", text: "a" },
    { id: "b", text: "b" },
    { id: "c", text: "c" },
    { id: "d", text: "d" },
    { id: "e", text: "e" },
  ],
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
    };
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
    // change this to an api call in your use case
    // callapi("data")
    //  .then((response) => {
    //    if (response.status === 200) {
    //      this.setState({ dataValue: response.value });
    //    }
    //  })
    //  .catch((error) => {
    //    console.log(error);
    //  });
  };

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
        <Layout>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="brand">Brand</label>
              <select class="form-control" id="brand">
                <option value="livguard">Livguard</option>
                <option value="Livfast">LivFast</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div class="form-group">
              <label for="post">Position</label>
              <select class="form-control" id="post">
                <option value="ASM">ASM</option>
                <option value="SE">SE</option>
                <option value="SED">SED</option>
                <option value="SDH">SDH(Helper)</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cn">Company Name</label>
              <input type="text" class="form-control" id="cn">
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="name" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="mobile">Mobile</label>
              <input type="mobile" class="form-control" id="mobile">
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="state" class="form-control" id="state">
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="city" class="form-control" id="city">
            </div>
            
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </Layout>
    );
  }
}

export default Home;
