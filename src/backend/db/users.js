import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rajat",
    lastName: "Gupta",
    email: "rajat@gmail.com",
    password: "rajatgupta",
    address: [
      {
        _id: uuid(),
        name: "Rajat Gupta",
        mobile: "9829838602",
        area: "215, North Avenue, Sardar Patel Marg",
        locality: "Near World Trade Park",
        pincode: "510021",
        city: "Jaipur",
        state: "Rajasthan",
        alternatePhoneNumber: "9460719592",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
