import React from "react";

const AboutSection = () => {
  const containerStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#fff",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000",
  };

  const subheadingStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <section style={containerStyle}>
      <h1 style={headingStyle}>
        At Haute Hijab, we make the hijabs you always wished you had — or the ones you never knew were possible.
      </h1>
      <p style={subheadingStyle}>
        Driven by the Islamic principle of <i>ihsaan</i> (striving for perfection in all we do), we make every hijab
        and accessory from scratch with meticulous attention to quality, style, and innovation — you won't find our
        products anywhere else. Each Haute Hijab is a timeless piece we know you'll be excited to put on and feel
        comfortable and confident in all day, for years to come.
      </p>
    </section>
  );
};

export default AboutSection;
