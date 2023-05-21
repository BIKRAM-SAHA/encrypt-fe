import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="font-bold text-orange-400 text-3xl text-center">
        Heritage Institute of Technology
      </div>
      <div className="text-2xl text-center">What do you wish to encrypt?</div>
      <div className="btn-group justify-center">
        <Link to="/image">
          <button className="btn btn-ghost mx-5">Image</button>
        </Link>
        <Link to="/text">
          <button className="btn btn-ghost mx-5">Text</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
