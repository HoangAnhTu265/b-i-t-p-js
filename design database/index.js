var classes = [
  {
    name: "1A",
    teacher: "Hoang",
  },
  {
    name: "2A",
    teacher: "Hanh",
  },
  { name: "3A", teacher: "Quynh" },
];


var class1A = classes.find(function(x){
    return x.name === "1A"
})
console.log(class1A.name)