//  *************level 1 (Basic)***********

// How will you access the third position of the following array?

let arr = [5, 10, 15];
console.log(arr[2]);
console.log("--------------------");

// How will you access the second element, degree from the following object?

let obj = { name: "Maimoona", degree: "MBBS" };
console.log(obj.degree);
console.log("--------------------");

// How will you access all elements of the following array using loops?

let arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.forEach(function (element) {
  console.log(element);
});
console.log("--------------------");

// How will you access all elements of the following object using loops?

let obj1 = { name: "Maimoona", degree: "MBBS", age: 25 };
for (const myproperty in obj1) {
  console.log(`${myproperty}: ${obj1[myproperty]}`);
}
console.log("--------------------");
// *************level 2 (Intermediate)***********
// Students' Name and Hobbies Data
let students = [
  {
    name: "Amna",
    hobbies: ["eating", "cooking"],
  },
  {
    name: "Daniyal",
    hobbies: ["arts", "shopping"],
  },
  {
    name: "Fahad",
    hobbies: ["coding", "cooking"],
  },
  {
    name: "Hajra",
    hobbies: ["sleep", "reading"],
  },
];
// solution using for loop
for (let i = 0; i < students.length; i++) {
  console.log(`Hobbies of ${students[i].name}`);
  for (let j = 0; j < students[i].hobbies.length; j++) {
    console.log(`${j + 1}. ${students[i].hobbies[j]} `);
  }
  console.log("**********************************************");
}

// solution using for each loop
students.forEach(function (elements) {
  console.log(` Hobbies of ${elements.name}`);

  elements.hobbies.forEach(function (innerElements, index) {
    console.log(`${index + 1} ${innerElements}`);
  });
  console.log("----------------------------------------");
});

// **************Extensive Students' Data*****************

let students1 = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114,
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false,
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660,
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true,
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215,
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false,
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215,
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false,
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212,
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true,
  },
];

// Name: Amna
// Gender: Female
// City: Karachi
// Score: 56 marks

students1.forEach(function (values) {
  console.log(`Name: ${values.name}`);
  if (values.gender == "f") {
    console.log("Gender: Female");
  } else {
    console.log("Gender: Male");
  }
  console.log(`City: ${values.address.city}`);
  console.log(`Score: ${values.admissionTestScore}`);
  console.log("------------------------");
});
console.log("----------------------");

// Print names of female students only.
students1.forEach(function (values) {
  if (values.gender == "f") {
    console.log(values.name);
  }
});
console.log("----------------------");

// Print names of male students only.
students1.forEach(function (values) {
  if (values.gender == "m") {
    console.log(values.name);
  }
});
console.log("----------------------");

//   Print names of students who have passed the admission test. Passing marks are 50

students1.forEach(function (values) {
  if (values.admissionTestScore >= 50) {
    console.log(values.name);
  }
});
console.log("----------------------");

// Print names and phone number of students who have Ufone.

students1.forEach(function (values) {
  if (values.phoneNo.includes("033") == true) {
    console.log(values.name);
  }
});
console.log("----------------------");

// Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
let groupA = " ";
let groupB = " ";
students1.forEach(function (values) {
  if (values.hasJob == true && values.hasSchoolBefore == true) {
    groupA += values.name + ", ";
  } else {
    groupB += values.name + ", ";
  }
});
console.log(`Group A: ${groupA}`);
console.log(`Group B: ${groupB}`);
console.log("----------------------");

// Print age of each student in the below format:

students1.forEach(function (values) {
  let date = new Date();
  let presentYear = date.getFullYear();
  let birthOfYear = values.dob.getFullYear();
  console.log(`${values.name}'s age is ${presentYear - birthOfYear} years`);
});
console.log("----------------------");

// Print the name of the oldest student

let oldestNum = students1[0].dob.getFullYear();
for (let k = 0; k < students1.length; k++) {
  if (oldestNum > students1[k].dob.getFullYear()) {
    oldestNum = students1[k].dob.getFullYear();
  }
}
students1.forEach(function (values) {
  if (oldestNum == values.dob.getFullYear()) {
    console.log(`The oldest student is ${values.name}`);
  }
});
console.log("----------------------");

// ****************Videos Data Task****************
let videos1 = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3,
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9,
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5,
  },
];

// Add at least 10 more videos to the above array and before writing the following programs in JS.
let addVideo = [
  {
    title: "How to use FOR  loop - tutorial by Tech Karo",
    lengthInMinutes: 9,
    category: "Education",
    uploadDate: new Date("12-10-2018"),
    tags: "javascript, loops, web development",
    features: ["free", "HD"],
    viewCount: 9005,
    rating: 4.6,
  },
  {
    title: "How to use if-else - tutorial by Tech Karo",
    lengthInMinutes: 7,
    category: "Education",
    uploadDate: new Date("11-12-2018"),
    tags: "javascript, loops, web development, if-else",
    features: ["Purchased", "HD"],
    viewCount: 9008,
    rating: 4.3,
  },
  {
    title: "How to use cook",
    lengthInMinutes: 3,
    category: "Social",
    uploadDate: new Date("14-10-2018"),
    tags: "household - cooking",
    features: ["fre", "HD"],
    viewCount: 1004,
    rating: 5.0,
  },
  {
    title: "How to use vs-code",
    lengthInMinutes: 4,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, web development,programming",
    features: ["free", "HD"],
    viewCount: 9009,
    rating: 3.9,
  },
  {
    title: "Coding Hacks",
    lengthInMinutes: 12,
    category: "Education",
    uploadDate: new Date("11-3-2020"),
    tags: "javascript, coding, web development",
    features: "Purchased",
    viewCount: 1204,
    rating: 4.3,
  },
  {
    title: "How to use Calculate Difficult Qs",
    lengthInMinutes: 3,
    category: "Education",
    uploadDate: new Date("11-10-2012"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "Low"],
    viewCount: 9084,
    rating: 4.0,
  },
  {
    title: "How to Stress free",
    lengthInMinutes: 10,
    category: "lifestyle",
    uploadDate: new Date("11-12-2019"),
    tags: "life, happy, hacks",
    features: ["Purchased", "HD"],
    viewCount: 8004,
    rating: 4.8,
  },
  {
    title: "Learn how to write code",
    lengthInMinutes: 9,
    category: "Education ",
    uploadDate: new Date("1-10-2016"),
    tags: "programming, coding,",
    features: ["free", "HD"],
    viewCount: 7024,
    rating: 4.2,
  },
  {
    title: "How to do shopping",
    lengthInMinutes: 32,
    category: "Social",
    uploadDate: new Date("11-12-2018"),
    tags: "lifestyle, purchasing",
    features: ["Purchased", "HD"],
    viewCount: 9704,
    rating: 4.7,
  },
  {
    title: "How to Play games",
    lengthInMinutes: 8,
    category: "Entertainment",
    uploadDate: new Date("3-3-2013"),
    tags: "Gamezone, Entertainment",
    features: ["Purchased", "HD"],
    viewCount: 9504,
    rating: 3.3,
  },
  {
    title: "How to Sing",
    lengthInMinutes: 24,
    category: "Entertainment",
    uploadDate: new Date("3-7-2015"),
    tags: "Talent, Entertainment",
    features: ["Purchased", "Low"],
    viewCount: 7504,
    rating: 4.3,
  },
  {
    title: "How to Write article",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("3-7-2016"),
    tags: "Talent, Content Writing",
    features: ["Purchased", "HD"],
    viewCount: 6009,
    rating: 4.8,
  },
];
addVideo.forEach(function (values) {
  videos1.unshift(values);
});

let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3,
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9,
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5,
  },
];

/*Print each video in this format:

 Title: Photoshop tutorial
 Length: 70 minutes
 Category: Education
 Views: 4,700
 Uploaded On: 22-July-2019
 Rating:*/

videos.forEach(function (myvalue) {
  console.log(`Title: ${myvalue.title}`);
  console.log(`Length: ${myvalue.lengthInMinutes}`);
  console.log(`Category: ${myvalue.category}`);
  console.log(`Views: ${myvalue.viewCount}`);
  console.log(`Uploaded On: ${myvalue.uploadDate}`);
  console.log(`Rating:`);
  console.log(`--------------------`);
});
//  Print titles of all short ( less than 3 minutes ) videos.
videos.forEach(function (myvalue) {
  if (myvalue.lengthInMinutes < 3) {
    console.log(myvalue.title);
  }
});
console.log("-------------------");
// Print titles of all long ( greater than 20 minutes ) videos.
videos.forEach(function (myvalue) {
  if (myvalue.lengthInMinutes > 20) {
    console.log(myvalue.title);
  }
});
console.log("-------------------");
// Print titles of all medium length videos.
videos.forEach(function (myValue) {
  if (myValue.lengthInMinutes > 2 && myValue.lengthInMinutes < 21) {
    console.log(myValue.title);
  }
});
console.log("-------------------");
// Print title of the longest video
let longestVideo = videos[0].lengthInMinutes;
videos.forEach(function (allVideo) {
  if (longestVideo < allVideo.lengthInMinutes) {
    longestVideo = allVideo.lengthInMinutes;
  }
});
videos.forEach(function (values) {
  if (longestVideo == values.lengthInMinutes) {
    console.log(`The Longest Video is ${values.title}`);
  }
});
console.log("-------------------");

// Print titles of all "Educational" videos
videos.forEach(function (values) {
  if (values.category == "Education") {
    console.log(values.title);
  }
});
console.log("-------------------");

// Print titles of all videos with tag "Javascript"

videos.forEach(function (values) {
  if (values.tags.includes("javascript") == true) {
    console.log(values.title);
  }
});
console.log("-------------------");
// Print titles of all videos with HD feature
videos.forEach(function (elements) {
  for (let m = 0; m < elements.features.length; m++) {
    if (elements.features[m].includes("HD") == true) {
      console.log(elements.title);
    }
  }
});

console.log("-------------------");
// Print titles of all videos uploaded today
videos.forEach(function (values) {
  if (values.uploadDate == new Date()) {
    console.log(values.title);
  }
});
console.log("------------------");
// Print titles of all videos uploaded this week

videos.forEach(function (values) {
  if (values.uploadDate == new Date()) {
    console.log(values.title);
  }
});

// Print titles of all videos uploaded this month
videos.forEach(function (values) {
  if (values.uploadDate.getMonth() == new Date().getMonth()) {
    console.log(values.title);
  }
});

console.log("------------------");
// Print titles of all videos uploaded this year
videos.forEach(function (values) {
  if (values.uploadDate.getFullYear() == new Date().getFullYear()) {
    console.log(values.title);
  }
});
console.log("------------------");
// Sort the array in ascending order of number of views and print the titles
function SortOrderAscending(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1; //a, b) is > then 0, then b will be sorted to a lower index than a.
    } else if (a[prop] < b[prop]) {
      return -1; //(a, b) is < 0, then a will be sorted to a lower index than b. Thus a will come first.
    }
    return 0; //(a, b) returns 0, then a and b will retain their respective positions.
  };
}
videos.sort(SortOrderAscending("viewCount")); //Pass the attribute to be sorted on

for (var item in videos) {
  console.log(videos[item].title);
}
console.log("------------------");

// Sort the array in Descending order of number of views and print the titles
function SortOrderDescending(prop) {
  return function (a, b) {
    if (a[prop] < b[prop]) {
      return 1; //a, b) is < then 0, then b will be sorted to a higher index than a.
    } else if (a[prop] > b[prop]) {
      return -1; //(a, b) is > 0, then a will be sorted to a higher index than b. Thus a will come first.
    }
    return 0; //(a, b) returns 0, then a and b will retain their respective positions.
  };
}
videos.sort(SortOrderDescending("viewCount")); //Pass the attribute to be sorted on

for (var item in videos) {
  console.log(videos[item].title);
}
console.log("----------------------");
//************Level 03 - Advance****************
// The Recipe Card
let recipe = {
  title: "Chicken Burger",
  serving: 1,
  ingredients: ["Chicken Patty", "Bun", "Ketchup", "Spices", "Mayonise"],
};
console.log(`* ${recipe.title}`);
console.log(`* Serves: ${recipe.serving}`);
console.log(`* Ingredients`);
recipe.ingredients.forEach(function (value) {
  console.log(` > ${value}`);
});
console.log("--------------------");
// The Reading List
let readingList = [
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: false,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    alreadyRead: false,
  },
];

readingList.forEach(function (value) {
  if (value.alreadyRead == true) {
    console.log(`You already read "${value.title}"`);
  } else {
    console.log(`You still need to read "${value.title}"`);
  }
});
