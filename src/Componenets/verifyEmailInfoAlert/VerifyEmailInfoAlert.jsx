import React from "react";
export const VerifyEmailInfoAlert = ({ errorMessage }) => {
  // Accept errorMessage as a prop
  return (
    <>
      {/* The button to open modal */}
      <a href="#my_modal_8" className="btn">
        open modal
      </a>
      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{errorMessage}</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
