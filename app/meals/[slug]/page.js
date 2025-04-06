import React from "react";

function MealsSlugPage({ params }) {
  console.log(params);
  return <div>This is {params.slug} Page</div>;
}

export default MealsSlugPage;
