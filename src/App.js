import React, {useState, useEffect} from "react";
import beFunc from './be.ts';

const MyButton = () => {
  const [bookId, setBookId] = useState(0);

  const handleClick = () => {
    const backendTxt = beFunc();
    if (bookId > 3) {
      setBookId(0)
    };
    setBookId(bookId + 1);
    alert(`${backendTxt} ${bookId}`);
  };
  return (
    <button onClick={handleClick}>
      Add button
    </button>
  );
};


const MyBook = () => {
  const [bookData, setBookData] = useState();

  useEffect(() => {
    const fecthBookData = async () => {
      try {
        const response = await fetch('/api/v1/books/1');
        const data = await response.json();
        setBookData(data);
      } catch(err) {
        console.log(err);
      }
    }
    fecthBookData();
  }, []);

  return (
    <div>
      {!bookData ? "Loading..." : <h2>{bookData[0].name}</h2>}
    </div>
  );
};

export default () => {
  return (
    <div>
    <h1>First Button</h1>
      <MyButton />
    <h1>Book List</h1>
      <MyBook />
  </div>
  );
};
