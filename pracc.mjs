const table = document.getElementById("myTable");

async function fetchData() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data.map((item) => ({ firstName: item.first_name, email: item.email, lastName: item.last_name, avatar: item.avatar}));
}

async function populateTable() {
  const data = await fetchData();
  data.forEach((item, index) => {
    const row = table.insertRow();
    const orderCell = row.insertCell(0);
    const firstNameCell = row.insertCell(1);
    const LastNameCell = row.insertCell(2);
    const avatar = row.insertCell(3);
    orderCell.innerHTML = index + 1;
    firstNameCell.innerHTML = item.firstName;
    LastNameCell.innerHTML = item.lastName;
    const img = document.createElement("img");
    img.src = item.avatar;
    avatar.appendChild(img);
  });
}

populateTable();
