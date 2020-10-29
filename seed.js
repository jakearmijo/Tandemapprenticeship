const { green, red } = require("chalk");
const { db } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    // questions
    const andrew = await Student.create({
      firstName: "Andrew",
      lastName: "Cohen",
      email: "andrcohen847@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/42741115_10213482026822177_7620455727630385152_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=ROwzmLWKzMgAX803qEv&_nc_ht=scontent-lga3-2.xx&oh=33b4bc95f4e16a5b61e73366dc8d825e&oe=5FB5336E",
      gpa: 4.0,
      campusId: spaceUniversity.id,
    });
    const bonnie = await Student.create({
      firstName: "Bonnie",
      lastName: "Bushnell",
      email: "bpbushnell@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/52880712_10156202138867014_588149170792038400_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=z4ZqxR1BsQ4AX8VO9gV&_nc_ht=scontent-lga3-2.xx&oh=efd9cbc197c6b4427d369c76fc7bd6c2&oe=5FB5A473",
      gpa: 3.5,
      campusId: spaceUniversity.id,
    });
    const dan = await Student.create({
      firstName: "Daniel",
      lastName: "Toy",
      email: "dwToy@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/83038041_10219026942681693_4329117628942516224_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=PKIn-X-EFe4AX8L0i9_&_nc_ht=scontent-lga3-2.xx&oh=93e4de75d771f86b2884a7f62ab7dbf7&oe=5FB47898",
      gpa: 3.6,
      campusId: videoGameUniversity.id,
    });
    const kevin = await Student.create({
      firstName: "Kevin",
      lastName: "Fairbairn",
      email: "kfairbairn@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t31.0-8/13248445_10154856624254392_696478968571092393_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Ms4EvOuwlzwAX9_2F7_&_nc_ht=scontent-lga3-2.xx&oh=12d6055dc85bc41c352e9897a654bfce&oe=5FB29362",
      gpa: 3.3,
      campusId: soccerUniversity.id,
    });
    const ralle = await Student.create({
      firstName: "Ralle",
      lastName: "Karadjov",
      email: "rallek@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t31.0-8/1401841_3749033121508_1726862424_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=uGk0zhwyTToAX8vfGQb&_nc_ht=scontent-lga3-2.xx&oh=53fe19f7000b44ee6d51335692ea59eb&oe=5FB335DD",
      gpa: 2.8,
      campusId: fireUniversity.id,
    });
    const dave = await Student.create({
      firstName: "Dave",
      lastName: "Stach",
      email: "dstach@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t31.0-8/30073632_903567957615_6621003523393812265_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=OLja6kMCvkEAX9OSbd-&_nc_ht=scontent-lga3-2.xx&oh=21719f245522a140bf4c5c2e7eb3bf75&oe=5FB20130",
      gpa: 3.2,
      campusId: fireUniversity.id,
    });
    const benM = await Student.create({
      firstName: "Ben",
      lastName: "Mang",
      email: "bmang@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/74634335_10100367395913387_4058945550161018880_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=M_q56_yknqQAX_pJcwl&_nc_ht=scontent-lga3-2.xx&oh=841b67f9af629e22f000bb62bac25cca&oe=5FB40D04",
      gpa: 3.7,
    });
    const ben = await Student.create({
      firstName: "Ben",
      lastName: "Kaye",
      email: "bkaye@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/20525571_10102548448665430_283396694454107118_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=l_tDWpOP7_UAX9OQNML&_nc_ht=scontent-lga3-2.xx&oh=35498fe4332d1f334dbc06dda90167df&oe=5FB3F5C9",
      gpa: 2.2,
      campusId: comicBookUniversity.id,
    });
    const amanda = await Student.create({
      firstName: "Amanda",
      lastName: "Koellner",
      email: "akoellner@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/44348258_4690800630522_1335194109853302784_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=d5YQ91ZFU20AX_eMDDM&_nc_ht=scontent-lga3-2.xx&oh=7d68193892512b662c1a10254094be1b&oe=5FB45874",
      gpa: 3.2,
      campusId: coolUniversity.id,
    });
    const katie = await Student.create({
      firstName: "Katie",
      lastName: "Novotony",
      email: "novo@gmail.com",
      imageUrl:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/99275958_10216358722537791_1073899277501071360_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=2F813qwMDb8AX_-BvvD&_nc_ht=scontent-lga3-2.xx&oh=5c41cef79b60306fd75ffdf32b79befe&oe=5FB51B8F",
      gpa: 4.0,
      campusId: comedyUniversity.id,
    });
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
