// task1
// const now = new Date();
// if (now.getMinutes() < 10) {
//   alert(now.getHours() + ":" + "0" + now.getMinutes());
// }else {
//   alert(now.getHours() + ":" + now.getMinutes());
// }

// task2
// const employee = {
//   name: "Farid Ali",
//   department: "Engineering",
//   contact: {
//     email: "farid.ali@example.com",
//     phone: "555-1234",
//     emergencyContact: {
//       name: "Far For",
//       relation: "Spouse",
//     },
//   },
// };
// let {
//   name,
//   department,
//   contact: {
//     email,
//     phone,
//     emergencyContact: { name: emergencyName, relation },
//   },
// } = employee;
// console.log("Ad:", name);
// console.log("Sobe:", department);
// console.log("Email:", email);
// console.log("Telefon:", phone);
// console.log("Tecili elaqe:", emergencyName);
// console.log("Elaqesi:", relation);

// task3
// const apiResponse = [
//     {
//       id: 1,
//       title: "JavaScript əsasları",
//       author: "Səid Məmmədov",
//       stats: [2500, 150, 30]
//     },
//     {
//       id: 2,
//       title: "Array Destructuring",
//       author: "Leyla Əliyeva",
//       stats: [1800, 220, 45]
//     },
//     {
//       id: 3,
//       title: "Müasir JavaScript",
//       author: "Tural Həsənli",
//       stats: [3200, 380, 70]
//     }
//   ];
// //   part1
// let { title, author, stats} = apiResponse[1];

// console.log("Basliq:", title);
// console.log("Muellif:", author);
// console.log("Sitatlar:", stats);

// part2

//   let {
//     title,
//     author,
//     stats: [oxunma, beyenme, serhler]
//   } = apiResponse[2];

//   console.log("Basliq:", title);
//   console.log("Muellif:", author);
//   console.log("Oxunma sayi:", oxunma);
//   console.log("Beyenme sayi:", beyenme);
//   console.log("Serh sayi:", serhler);

// part3
//   let {
//     title,
//     author,
//     stats: [oxunma, beyenme, serhler]
//   } = apiResponse[1];
//   console.log(`Meqale: ${title}, Muellif: ${author}, ${oxunma} oxunma, ${beyenme} beyenme, ${serhler} serh`)

// task4
function renderUserProfile(data) {
  let username = data.user?.username ?? "Qonaq";
  let avatar = data.user?.profile?.avatar ?? "/default-avatar.jpg";
  let bio = data.user?.profile?.bio ?? "Melumat yoxdur";
  let email = data.user?.contact?.email ?? "Teyin edilmeyib";
  let isPremium = data.user?.account?.premium ?? false;

  return {
    username,
    avatar,
    bio,
    email,
    isPremium,
  };
}

// console.log(
//   renderUserProfile({
//     user: {
//       username: "tahir2023",
//       profile: {
//         avatar: "/users/tahir.jpg",
//         bio: "JavaScript developer",
//       },
//       contact: {
//         email: "tahir@example.com",
//       },
//       account: {
//         premium: true,
//       },
//     },
//   })
// );

// console.log(
//   renderUserProfile({
//     user: {
//       username: "aynur",
//       profile: {
//         bio: "",
//       },
//       contact: {},
//     },
//   })
// );

console.log(
  renderUserProfile({
    user: {
      username: null,
    },
  })
);

// console.log(renderUserProfile({}));
