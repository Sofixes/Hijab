import React from "react";

const Head = () => {
  const headStyle = {
    backgroundColor: "#006400",
    color: "#fff",
    padding: "10px 0",
    overflow: "hidden",
    position: "relative",
  };

  const slidingContainerStyle = {
    display: "flex",
    alignItems: "center",
    height: "30px",
    overflow: "hidden",
    position: "relative",
  };

  const slidingContentStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "slide 15s linear infinite",
  };

  const spanStyle = {
    fontSize: "14px",
    display: "inline-block",
    paddingRight: "50px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const keyframesStyle = `
    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <section style={headStyle}>
        <div style={slidingContainerStyle}>
          <div style={slidingContentStyle}>
            <span style={spanStyle}>
              <i className="fa fa-phone"></i> +9770000000000 &nbsp;&nbsp; | &nbsp;&nbsp;
              <i className="fa fa-envelope"></i>
              <a href="mailto:di@gmail.com" style={linkStyle}>
                {" "}
                di@gmail.com
              </a>{" "}
              &nbsp;&nbsp; | &nbsp;&nbsp; Welcome to our store! Check out the
              latest offers and deals! &nbsp;&nbsp; | &nbsp;&nbsp; Free shipping
              for orders above $50!
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
