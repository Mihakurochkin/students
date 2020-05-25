let students = [
  {
    firstName: 'Jevgeniy',
    lastName: 'Kurochkin',
    grade1: 11,
    grade2: 9,
  },
  {
    firstName: 'Mykhailo',
    lastName: 'Kurochkin',
    grade1: 8,
    grade2: 6,
  },
  {
    firstName: 'Halyna',
    lastName: 'Frontai',
    grade1: 11,
    grade2: 12,
  },
  {
    firstName: 'James',
    lastName: 'Dean',
    grade1: 5,
    grade2: 9,
  }
];
students = students.map((value) => {
  value.total = Math.round((value.grade1 + value.grade2) / 2);
  return value;
});

const average = students.reduce((acc, student) => acc + student.total, 0)/ students.length;
$(() => {
  $('#summary').text(`Average: ${average}`);
  students.forEach((student) => {
    $('#table').append($(`
      <div class="row">
          <div class="cell">${student.lastName}</div>
          <div class="cell">${student.firstName}</div>
          <div class="cell">${student.grade1}</div>
          <div class="cell">${student.grade2}</div>
          <div class="cell">${student.total}</div>
      </div>
    `));
  });
});
