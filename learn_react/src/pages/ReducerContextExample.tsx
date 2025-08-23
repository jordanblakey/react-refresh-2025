import { createContext, useContext } from "react";
import type { Dispatch, ReactNode } from "react";
import { useImmerReducer } from "use-immer";

// 1. DEFINE TYPES (No change)
type Item = {
  id: number;
  name: string;
  price: number;
};

type State = {
  items: Item[];
};

type Action =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: number };

// 2. CREATE THE IMMER-BASED REDUCER
// With Immer, we can write simpler "mutating" logic. Immer handles the
// immutable updates under the hood. We also don't need to return the state.
const cartReducer = (draft: State, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      draft.items.push(action.payload);
      break;
    case "REMOVE_ITEM":
      draft.items = draft.items.filter((item) => item.id !== action.payload);
      break;
  }
};

// 3. CREATE THE CONTEXT (No change)
const CartStateContext = createContext<State | undefined>(undefined);
const CartDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const initialState: State = {
  items: [],
};

// 4. CREATE THE PROVIDER COMPONENT
// We now use useImmerReducer instead of useReducer. The API is the same.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useImmerReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// 5. CREATE CUSTOM HOOKS FOR EASY ACCESS (No change)
export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
};

// --- EXAMPLE USAGE (No change) ---

const products: Item[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 50 },
  { id: 3, name: "Keyboard", price: 100 },
];

function ProductList() {
  const dispatch = useCartDispatch();

  const handleAdd = (item: Item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}
        >
          {product.name} - ${product.price}
          <button
            onClick={() => handleAdd(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { items } = useCartState();
  const dispatch = useCartDispatch();

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => handleRemove(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

// The main component that brings it all together
export default function ReducerContextExample() {
  return (
    // Wrap the components that need access to the cart state in the provider
    <CartProvider>
      <h1>Modern State Management with useReducer & useContext</h1>
      <p>
        This pattern provides a Redux-like experience without external
        libraries.{" "}
        <strong>Now refactored to use Immer for simpler reducer logic.</strong>
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
