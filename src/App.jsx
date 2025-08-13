import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/counter';
import ComponenteWithChildren from './components/ComponenteWithChilden';
import ComponenteUseEffect from './components/ComponenteUseEffect';
import Users from './pages/Users';
// import Users from './containers/Users';

function App() {

  const ejemplo = async () => {
    const a = fetch('http://miapi.com/usuarios')

    console.log(a)
  }


  return (
    <div className="App">
      {/* <Counter />

      <ComponenteWithChildren>
        lorem Ipsum

        <div>
          Otro texto
        </div>

        <table border={1}>
          <thead>
            <th>Cabecera 1</th>
            <th>Cabecera 2</th>
            <th>Cabecera 3</th>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
            </tr>
          </tbody>
        </table>
      </ComponenteWithChildren>

      <ComponenteUseEffect />

      <br/>
      <Users /> */}

      <Users />
    </div>
  );
}

export default App;
