function makeStudentsReport(data) {
  let report = [];
  for (let i = 0; i < data.length; i++) {
    report.push(data[i].name + ': ' + data[i].grade);
  }

  return report;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].status = 'In Summer school';
  }
  return students;
  return {
    name: student.name,
    status: 'In Summer School',
    course: student.course
  };
}

// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [{ id: 22, foo: 'bar' }, { id: 28, foo: 'bizz' }, { id: 19, foo: 'bazz' }];

function findById(items, idNum) {
  // your code here
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}

//TESTS

function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology'
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics'
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science'
    }
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();

function testIt2() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' }
  ];

  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
        testData.length +
        ' but `makeStudentsReport` returned array of length ' +
        results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error('FAILURE: `makeStudentsReport` is not ' + 'producing expected strings');
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt2();

function testIt3() {
  const testData = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bizz' }, { id: 3, bang: 'boo' }];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error('Asked for item with id of `3` but got back one with id of ' + result.id);
    return;
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt3();
