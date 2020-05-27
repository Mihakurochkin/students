// state
let loading = true;
function setLoading(value) {
  loading = value;
  update();
}
let students = [];
function setStudents(arr) {
  students = arr;
  update();
}

// update
function update() {
  $('#loader').css('display', loading ? 'block' : 'none');
  const average = students.reduce((acc, student) => acc + student.total, 0)/ students.length;
  $('#summary').text(`Average: ${average}`);
  renderTable();
}

function renderTable() {
  $('#table').empty();
  $('#table').append($(`
    <div class="row first">
      <div class="cell">last name</div>
      <div class="cell">first name</div>
      <div class="cell">first grades</div>
      <div class="cell">second grades</div>
      <div class="cell">total grades</div>
    </div>
  `));
  students.map((value) => {
    value.total = Math.round((value.grade1 + value.grade2) / 2);
    return value;
  }).forEach((student) => {
    $('#table').append($(`
      <div class="row">
          <div class="cell">${student.lastName}</div>
          <div class="cell">${student.firstName}</div>
          <div class="cell">${student.grade1}</div>
          <div class="cell">${student.grade2}</div>
          <div class="cell">${student.total}</div>
      </div>
    `));
  })
}

// main code
$(() => {
  update();

  $.get("http://localhost:3000/students", (array) => {
    setStudents(array);
    setLoading(false);
  });
});
