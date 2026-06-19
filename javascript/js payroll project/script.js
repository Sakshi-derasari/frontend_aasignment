let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Salary Calculation
function calculateSalary(basic) {
  let hra = basic * 0.30;
  let da = basic * 0.10;
  let tax = basic * 0.05;
  let net = basic + hra + da - tax;

  return { hra, da, tax, net };
}

// Display Table
function displayEmployees(list = employees) {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  list.forEach((emp, index) => {
    let row = `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.basic}</td>
        <td>${emp.hra}</td>
        <td>${emp.da}</td>
        <td>${emp.tax}</td>
        <td>${emp.net}</td>
        <td>
          <button class="edit" onclick="editEmployee(${index})">Edit</button>
          <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

// Save Employee
document.getElementById("empForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let salary = parseInt(document.getElementById("salary").value);
  let editIndex = document.getElementById("editIndex").value;

  // Validation
  if (name === "" || isNaN(salary) || salary <= 0) {
    alert("Enter valid data!");
    return;
  }

  let { hra, da, tax, net } = calculateSalary(salary);

  let empData = {
    name,
    basic: salary,
    hra,
    da,
    tax,
    net
  };

  if (editIndex === "") {
    employees.push(empData);
  } else {
    employees[editIndex] = empData;
    document.getElementById("editIndex").value = "";
  }

  localStorage.setItem("employees", JSON.stringify(employees));

  this.reset();
  displayEmployees();
});

// Edit
function editEmployee(index) {
  let emp = employees[index];

  document.getElementById("name").value = emp.name;
  document.getElementById("salary").value = emp.basic;
  document.getElementById("editIndex").value = index;
}

// Delete
function deleteEmployee(index) {
  if (confirm("Delete this employee?")) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
  }
}

// Search
document.getElementById("search").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();

  let filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(value)
  );

  displayEmployees(filtered);
});

// Initial Load
displayEmployees();