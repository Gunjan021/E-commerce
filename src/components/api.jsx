import { useEffect, useState } from "react";

const TableView = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const filterData = data.filter((item) => {
    const searchValue = searchText.toLowerCase();
    return (
      String(item.title).includes(searchValue) ||
      String(item.id).includes(searchValue)
    );
  });

  return (
    <div>
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.id}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableView;
