import React from "react";

function Signup() {
  return (
    <>
      <div>
        <div id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/*pass*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="Pssword"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/*buuti*/}

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not register yet ?
                <span
                  to="/Signup "
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </span>
                {""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;