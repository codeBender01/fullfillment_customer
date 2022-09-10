import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NoMatch() {
  const shouldRedirect = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/bortda");
    }
  });
  return <div>hey</div>;
}

export default NoMatch;
