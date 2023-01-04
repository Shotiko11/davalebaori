import React from "react";


const Parent =() => {
  const userArray = [
    {id:1, name:"ana"},
    {id:2, name:"levani"},
  ];

  return (
    <>
      <Child userArray={userArray} isUserLoggedIn={true} />
    </>
  )
};

const Child = ({isUserLoggedIn, userArray}) => {
  if (!isUserLoggedIn) {
    return <h1>User in not loggedin</h1>
  }

  return (
    <h1>
      {userArray.length > 0 ? (
        <>
          {userArray.map((item) => {
            return <h1 key={item.id}>{item.name}</h1>
          })}
        </>
      )  : (
        ""
        )}
    </h1>
  )
}



function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
