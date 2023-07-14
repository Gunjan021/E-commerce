import "./App.css";
import NavigationLG from "./components/NavigationLG";
import TopHeader from "./components/TopHeader";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Grid from "./components/Grid";
import Logo from "./components/Logo";
// import TableView from "./components/api";
// import { useEffect, useState } from "react";
// import Timer from "./components/Timer";
// import CategoryFilter from "./components/CategoryFilter";
// import FirstBanner from "./components/FirstBanner";

// import Form2 from "./components/Form2";
// import Form3 from "./components/Form3";
// import Form4 from "./components/Form4";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [data, setData] = useState([]);
  // const [searchText, setSearchText] = useState("");

  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const jsonData = await response.json();
  //   console.table(data);
  //   setData(jsonData);
  // };

  // useEffect(() => {
  //   fetchData();
  // });

  // const filteredData = data.filter((item) => {
  //   const searchValue = searchText.toLowerCase();
  //   return (
  //     String(item.title).includes(searchValue) ||
  //     String(item.id).includes(searchValue) ||
  //     String(item.userId).includes(searchValue) ||
  //     String(item.completed).includes(searchValue)
  //   );
  // });

  return (
    <div>
      {/* <div>
        <input
          name="searchText"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.completed ? "true" : "false"}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* <TableView></TableView> */}
      {/* <Timer></Timer> */}
      <div className="sticky top-0 bg-white py-2 px-28 md:hidden">
        <Logo />
      </div>
      <TopHeader></TopHeader>
      <NavigationLG></NavigationLG>
      <Hero />
      <Section2 />
      <Grid />
    </div>
  );
}

export default App;
