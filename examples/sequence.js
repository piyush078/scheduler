const dummy = (id) => (() => {
  console.log(`Function ${id}`);
});

let Schedules = Scheduler([
  { func: dummy(1), time: 1000 },
  { func: dummy(2) },
  { func: [dummy(3), dummy(4)], time: 3000 }
]);

if (Schedules) {
  Schedules(() => {
    console.log("Yay! Completed!!");
  });
} else {
  console.log("Oops!! Schedules could not be made.");
}
