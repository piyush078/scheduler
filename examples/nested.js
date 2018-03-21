const dummy = (msg) => (() => {
  console.log(`Function ${msg}`);
});

let Schedules = Scheduler([
  {
    func: [
      dummy("Level 1 function with delay 4000"),
      Scheduler([
        {
          func: [
            dummy("Level 2 function with delay 2000"),
            Scheduler([
              { func: dummy("Level 3 function with delay 1000"), time: 1000 }
            ])
          ], 
          time: 2000
        }
      ])
    ], 
    time: 4000
  }
]);

Schedules();