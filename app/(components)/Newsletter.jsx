import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Newsletter() {
  const handleOnSubmit = {
    handleOnSubmit: (e) => {
      e.preventDefault();
      console.log("submitted");
    },
  };
  return (
    <div className="flex justify-center items-center w-full ">
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <div className="bg-black w-full max-w-6xl rounded-xl flex justify-around items-start sm:items-center md:flex-row gap-8 p-10 flex-col">
        <h2 className="font-black text-4xl">
          STAY UP TO DATE ABOUT <br />
          OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3 w-full md:max-w-[400px] sm:items-center">
          <form
            className="flex flex-row justify-center items-center gap-3 pl-2 text-black bg-white rounded-full w-full sm:max-w-[400px]"
            onSubmit={handleOnSubmit}
          >
            <MdOutlineMailOutline className="text-gray-500 text-xl ml-2" />
            <input
              className="outline-none bg-white rounded-r-full h-[45px] w-full "
              placeholder="Enter your email address"
              type="text"
              name="email"
            />
          </form>
          <button
            type="submit"
            className="btn text-black rounded-full bg-white w-full sm:max-w-[400px] hover:bg-black hover:text-white outline-none"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Subscribe to Newsletter
          </button>{" "}
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black ">
          <h3 className="font-bold text-lg">Thank You For Subscribing!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
