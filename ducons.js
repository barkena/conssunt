const obj = {
  name: 'John',
  age: 30
};

const getAge = n => {
  return {
    age: obj.age
  };
};

console.log(getAge()); // Output: { age: 30 }
