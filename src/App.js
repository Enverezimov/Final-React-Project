import './App.css';
import Navbar from './component/Navbar/Navbar';
import ProductContainer from './component/ProductContainer/ProductContainer';
import MenuBodyContainer from './component/MenuBodyContaine/MenuBodyContainer';
import { Route, Switch } from 'react-router';
import { useState, useReducer } from 'react';
import Basket from './component/Basket/Basket';
import MiniBasket from './component/MiniBasket/MiniBasket';
import products from './productlist.json';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, data: [...state.data.map((e) => e.id == action.payload.id ? { ...action.payload, count: action.payload.count + 1 } : e)] };
    case 'decrement':
      return { ...state, data: [...state.data.map((e) => e.id == action.payload.id ? { ...action.payload, count: action.payload.count - 1 } : e)] };
    case 'resetCount':
      return { ...state, data: [...state.data.map((e) => e.id == action.payload.id ? { ...action.payload, count: 0 } : e)] };

    default:
      throw new Error('Unhandled type...');
  }
}
function App() {
  const [data, dispatch] = useReducer(reducer, products)
  const [editMode, setEditmode] = useState(false)

  const getPrice = function () {
    return getCardItems().reduce((a, b) => a + b.price * b.count, 0);
  }

  const getCardItems = () => {
    return data.data.filter(d => d.count > 0);
  }

  const setCountToProduct = (element, type) => {
    let count = element.count || 0;
    dispatch({ type, payload: { ...element, count } })
  }
  const getData = () => {
    return data.data.slice(0, 10)
  }
  return (
    <div className="App">
      <div className="Grid">
        <Navbar />
        <Switch>
          < Route className="Navlink" exact path="/">
            < MenuBodyContainer data={getData()} count={setCountToProduct} />
          </Route>
          <Route path="/productinfo/:id">
            <ProductContainer data={getData()} count={setCountToProduct} />
          </Route>
        </Switch>
        {editMode && <Basket
          items={getCardItems()}
          onReset={(item) => dispatch({ type: 'resetCount', payload: item })}
          onClose={() => setEditmode(false)}
          price={getPrice()}
          setCount={setCountToProduct} />}
        {!editMode && <MiniBasket
          items={getCardItems()}
          price={getPrice()}
          onClick={() => setEditmode(true)} />}
        {/* <AddFolder /> */}
        {/* <AddBaket /> */}
        {/* <Slideshow/> */}
      </div>
    </div>
  );
}

export default App;
