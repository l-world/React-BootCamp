import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export default function MemoDemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const findLongestName = (comments:any) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
      <h1>{getLongestName}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""}
        Toggle
      </button>
      {toggle && <h1> toggle text</h1>}
    </div>
  );
}
