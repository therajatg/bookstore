import style from "./addressModal.module.css";
import { useEffect, useState } from "react";
import { addAddress, editAddress } from "../../helperFunctions/index";

export function AddressModal({
  setModal,
  userDispatch,
  token,
  edit,
  setEdit,
  addressToEdit,
}) {
  console.log(addressToEdit);
  const [addressInput, setAddressInput] = useState({});

  useEffect(() => {
    if (edit) {
      setAddressInput(addressToEdit);
    }
  }, [edit]);

  const handleChange = (e) => {
    setAddressInput({ ...addressInput, [e.target.name]: e.target.value });
  };

  const submitAddress = (e) => {
    edit
      ? editAddress(addressToEdit._id, addressInput, userDispatch, token)
      : addAddress(addressInput, userDispatch, token);
    setModal(false);
    setAddressInput({});
  };

  return (
    <div className={style.wrapper} onClick={() => setModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className={style.infoDiv}>
        <div className={style.horizontalInputs}>
          <div>
            <label htmlFor="">Name</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput?.name}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="">Mobile</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.mobile}
              name="mobile"
            />
          </div>
        </div>
        <div className={style.horizontalInputs}>
          <div>
            <label htmlFor="">Address</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.area}
              name="area"
            />
          </div>
          <div>
            <label htmlFor="">Locality</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.locality}
              name="locality"
            />
          </div>
        </div>
        <div className={style.horizontalInputs}>
          <div>
            <label htmlFor="">Pincode</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.pincode}
              name="pincode"
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.city}
              name="city"
            />
          </div>
        </div>
        <div className={style.horizontalInputs}>
          <div>
            <label htmlFor="">Alternate Phone Number</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.alternatePhoneNumber}
              name="alternatePhoneNumber"
            />
          </div>
          <div>
            <label htmlFor="">Select State</label>
            <br />
            <input
              type="text"
              className={style.input}
              onChange={handleChange}
              value={addressInput.state}
              name="state"
            />
          </div>
        </div>

        <button className={style.cancelBtn} onClick={() => setModal(false)}>
          Cancel
        </button>
        <button className={style.submitAddress} onClick={submitAddress}>
          {!edit && <span>Add Address</span>}
          {edit && <span>Edit Address</span>}
        </button>
      </div>
    </div>
  );
}
