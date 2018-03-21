# Scheduler

Scheduler is a Javascipt library to schedule multiple functions using time delay values. It takes an input of array of `schedules` (object of functions and time delay values) and using [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) function, they are executed.

## Quick Start
Download the Github repository, extract and use `scheduler.js` or `scheduler.min.js` in the project.

## Documentation
Scheduler gets an array of schedules and it returns a function that can be called to execute the schedules.

An optional callback can be passed while calling the function. This callback will execute once the **last schedule** in the array gets executed.

```javascript
schedules = Scheduler(schedulesArray[, onSetupCompleteFunction]);
schedules([callback]);
```

`schedulesArray` is an object containing two properties:
- *func*: It is a function or an array of functions in a schedule.
- *time*: It is the optional value of time delay. When this value is omitted it takes the time value of the previous schedule in the list.

## Examples

#### Basic syntax
```javascript
let Schedules = Scheduler([
  { 
    func: () => { console.log("function 1"); },
    time: 1000 
  },
  { 
    // an array of functions; they execute together
    func: [  
      () => { console.log("function 2"); },
      () => { console.log("function 3"); }
    ]
  }
], 
() => {
  console.log("Schedules have been made.");
});
```

#### Nested Schedulers
```javascript
let Schedules = Scheduler([
  { 
    func: () => { console.log("function 1"); }, 
    time: 1000 
  },
  { 
    func: [
      () => { console.log("function 2"); },
      Scheduler([  // nested Schedules are also possible
        { 
          // this function executes after the parent function is executed
          func: () => { console.log("function 3"); } 
        }
      ])
    ]
  }
]);
```
