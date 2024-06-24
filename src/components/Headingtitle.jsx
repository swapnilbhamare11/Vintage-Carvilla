import React from "react";

function Headingtitle(props) {
  return (
    <>
      <section
        className="hero-section ptb-100 gradient-overlay"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* // background: "url('drive.jpg') no-repeat center center / cover", }} > */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <br />
                <br />
                <br />
                <br />
                <h1 className="text-white mb-0">{props.heading}</h1>
                <br />
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Headingtitle;
