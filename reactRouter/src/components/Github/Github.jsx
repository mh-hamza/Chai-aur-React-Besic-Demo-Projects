import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData]= useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/mh-hamza')
    .then((response) => response.json())
    .then(data=>{
      console.log(data);
      setData(data)
    })
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl max-w-[1000px] mx-auto">
      Github followers: {data.followers}
      <img className="w-[300px] " src={data.avatar_url} alt="" />
      <a href={data.blog} target="_blank">{data.blog}</a>
    </div>
  );
}

export default Github;
