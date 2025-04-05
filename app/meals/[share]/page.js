import React from "react";

function SharePage({ params }) {
  console.log(params);
  return <div>This is {params.share} Page</div>;
}

export default SharePage;
