const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const found = data.filter((record) => record.profession === 'developer')
    console.log(found);
  }
  
  // 2. Add Data
  function addData() {data.push({name: 'Karthik',age: 22, profession: 'student'});
console.log(data)}
  
  // 3. Remove Admins
  function removeAdmin() {const found = data.filter((record) => record.profession !=="admin")
  console.log(found);

  }
  
  // 4. Concatenate Array
  function concatenateArray() {

  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, obj) => sum + obj.age, 0);
const averageAge = totalAge / data.length;
console.log(averageAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {const above = data.find((record) => { return record.age > 25 });
  console.log(above);

  }
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {const sortAge = data.sort((a, b) => a.age - b.age);
    console.log(sortAge);}
  
  // 9. Update Profession
  function updateJohnsProfession() {for(const record of data) {
    if(record.name === 'john') {
    record.profession = 'student'
    }
    }
    console.log(data);}
  
  // 10. Profession Count
  function getTotalProfessions() {
    const findProfessions = new Set(data.map(record => record.profession))
    console.log(findProfessions.size);
  }