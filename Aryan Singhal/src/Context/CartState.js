import { useReducer } from "react";
import Context from "./Context";
import React from "react";
import {
  AddToCart,
  RemoveCartItem,
  AddToWish,
  RemoveFromWish,
  LoggedIn,
  IncQty,
  DecQty,
  StartQty,
} from "./Types";
import { ReduceCart } from "./Reducer";

function CartState({ children }) {
  const initialState = {
    cartItem: [],
    wishItem: [],
    qty: 1,
  };
  const [state, dispatch] = useReducer(ReduceCart, initialState);
  const addCart = (item) => {
    dispatch({ type: AddToCart, payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: RemoveCartItem, payload: id });
  };
  const addWish = (prod) => {
    dispatch({ type: AddToWish, payload: prod });
  };
  const removeWish = (id) => {
    dispatch({ type: RemoveFromWish, payload: id });
  };
  const IncVal = (e) => {
    dispatch({ type: IncQty, payload: e });
  };
  const DecVal = (e) => {
    dispatch({ type: DecQty, payload: e });
  };
  const InitQty = (e) => {
    dispatch({ type: StartQty, payload: e });
  };
  return (
    <Context.Provider
      value={{
        cartItem: state.cartItem,
        wishItem: state.wishItem,
        qty: state.qty,
        InitQty,
        IncVal,
        DecVal,
        addCart,
        addWish,
        removeWish,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default CartState;
