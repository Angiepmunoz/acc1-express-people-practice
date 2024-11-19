const people = [
  {
      id: 1,
      name: "John Doe",
      age: 30,
      gender: "Male",
      city: "New York",
      isActive: true,
  },
  {
      id: 2,
      name: "Jane Smith",
      age: 25,
      gender: "Female",
      city: "Los Angeles",
      isActive: true,
  },
  {
      id: 3,
      name: "Michael Johnson",
      age: 40,
      gender: "Male",
      city: "Chicago",
      isActive: false,
  },
  {
      id: 4,
      name: "Emily Davis",
      age: 35,
      gender: "Female",
      city: "San Francisco",
      isActive: true
  }
];

module.exports = people;

/*

    sample data for post:
    {
        "name": "Bruce Wayne",
        "age": 35,
        "gender": "Male",
        "city": "Gotham",
        "isActive": true
    }
    sample data for put:
    Change Bruce Wayne to:
    {
        "id": 5,
        "name": "Penny Robinson",
        "age": 15,
        "gender": "Female",
        "city": "New London",
        "isActive": true
    }

*/