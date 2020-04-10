import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

//import App from "./App";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Yassine Mersni" },
      { id: 2, nom: "Rim Mersni" },
      { id: 3, nom: "Zied Mersni" }
    ],
    nouveauClient: ""
  };

  handleDelete = id => {
    //copy clients tab
    const clients = [...this.state.clients];
    // fetch index of clicked item
    const index = clients.findIndex(client => client.id === id);
    //delete item from index to x elements (x here is 1)
    clients.splice(index, 1);
    // Update initial tab
    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
