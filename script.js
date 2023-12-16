const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const found = data.find((record) => { return record.profession = 'developer' });
    console.log(found);
  }
  
  // 2. Add Data
  function addData() {data.push({name: 'Karthik',age: 22, profession: 'student'});
console.log(data)}
  
  // 3. Remove Admins
  function removeAdmin() {}
  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  function averageAge() {}
  
  // 6. Age Check
  function checkAgeAbove25() {const above = data.find((record) => { return record.age > 25 });
  console.log(above);

  }
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {}
  
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Profession Count
  function getTotalProfessions() {}