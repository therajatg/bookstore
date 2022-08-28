import style from "./address.module.css";
import { useAuth, useUserContext } from "../../contexts/index";
import { useEffect, useState } from "react";
import { AddressModal } from "../index";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  getAddress,
  addAddress,
  editAddress,
  deleteAddress,
} from "../../helperFunctions/index";
import { useLocation, useNavigate } from "react-router-dom";

export function Address() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [addressToEdit, setaddressToEdit] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    userState: { address },
    userDispatch,
    deliveryAddress,
    setDeliveryAddress,
  } = useUserContext();

  const {
    authState: { user, token },
  } = useAuth();

  const userId = user?._id;

  useEffect(() => {
    getAddress(token, userDispatch);
  }, []);

  return (
    <div className={style.main}>
      {address?.length === 0 && <div>No address available</div>}
      <button
        className={style.addNewBtn}
        onClick={() => {
          setModal(true);
          setAddAddress(true);
        }}
      >
        Add New Address
      </button>
      <div className={style.addressContainer}>
        {address?.length > 0 &&
          address?.map((add) => (
            <div className={style.detail} key={add._id}>
              <div
                onClick={() => {
                  if (pathname === "/deliveryAddress") {
                    setDeliveryAddress(add);
                    navigate("/cart/checkout");
                  }
                }}
              >
                <span>{add?.name}</span>
                <br />
                <span>{add?.area}</span>
                <br />
                <span>{add?.locality}</span>
                <br />
                <span>
                  {add?.city}, {add?.state} - {add?.pincode}
                </span>
                <br />
                <span>Contact: {add?.mobile}</span>
              </div>
              <div className={style.icons}>
                <FaEdit
                  className={style.edit}
                  onClick={() => {
                    setModal(true);
                    setEdit(true);
                    setaddressToEdit(add);
                  }}
                />
                <AiFillDelete
                  className={style.delete}
                  onClick={() => deleteAddress(add._id, userDispatch, token)}
                />
              </div>
            </div>
          ))}
      </div>
      {modal && (
        <AddressModal
          setModal={setModal}
          userDispatch={userDispatch}
          token={token}
          edit={edit}
          setEdit={setEdit}
          addressToEdit={addressToEdit}
          addAddress={addAddress}
        />
      )}
    </div>
  );
}
