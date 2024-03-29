import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:[],
    userId: null,
    status: null,
    total: null,
    taxPrcnt: null,
    taxAmount: null,
    isDelivered: false,
    deliveryInfo: {
      name: null,
      location: null,
      phoneNum: null
    },
    billingInfo: {
      cardNum: null,
      cardExp: null,
      cardCvc: null,
      cardId: null
    }
  },
  reducers: {
    AddToCart: (state, {payload}) => {

      if (!state.cartItems.length) {
        const Uid = localStorage.getItem('id');
        state.userId = Uid;
      }

      const index = state.cartItems.findIndex((obj) => obj.prod._id === payload.prod._id);

      if (index !== -1) {
        if(state.cartItems[index].prod.stock >= state.cartItems[index].qty + payload.qty) {
          state.cartItems[index].qty += payload.qty;
          state.cartItems[index].color = payload.color;
          state.cartItems[index].size = payload.size;
        } else {
          notification.warning({
            message: 'Cannot Add More',
            description: 'Sorry, We have limited stock for this Product',
            duration: 2
          });
        }
      } else {
        state.cartItems.push(payload);
      }

    },
    SelectItem: (state, {payload}) => {
      state.cartItems = state.cartItems.map((obj) => {
        if (obj.prod._id === payload._id) {
          return { ...obj, isSelected: true };
        }
        return obj;
      });
    },
    UnSelectItem: (state, {payload}) => {
      state.cartItems = state.cartItems.map((obj) => {
        if (obj.prod._id === payload._id) {
          return { ...obj, isSelected: false };
        }

        return obj;
      });
    },
    SelectAllItems: (state) => {
      state.cartItems = state.cartItems.map((obj) => ({
        ...obj,
        isSelected: true
      }));
    },
    UpdateItemQty: (state, {payload}) => {
      state.cartItems = state.cartItems.map((obj) => ({
        ...obj,
        qty: obj.prod._id === payload._id ? payload.qty : obj.qty
      }));
    },
    ClearCart: (state) => {
      state.cartItems = [];
    },
    ClearError: (state) => {
      state.error = null;
    },
    RemoveFromCart: (state, {payload}) => {
      state.cartItems = state.cartItems.filter((obj) => obj.prod._id !== payload._id);
    },
    AddDeliveryInfo: (state, {payload: {name, location, phoneNum}}) => {
      state.deliveryInfo.name = name;
      state.deliveryInfo.location = location;
      state.deliveryInfo.phoneNum = phoneNum;
    },
    AddBillingInfo: (state, {payload: {cardNum, cardExp, cardCvc}}) => {
      state.billingInfo.cardNum = cardNum;
      state.billingInfo.cardExp = cardExp;
      state.billingInfo.cardCvc = cardCvc;
    }
  }
});

export const { 
  AddToCart,
  SelectItem,
  UnSelectItem,
  SelectAllItems,
  UpdateItemQty,
  ClearCart,
  ClearError,
  RemoveFromCart,
  AddDeliveryInfo,
  AddBillingInfo
} = cartSlice.actions;

export default cartSlice.reducer;