/*
 * Scheduler
 * A Javascipt Scheduling Library
 * Author: Piyush Madhusudan
 * Licence: MIT Licence
 */

/**
 * Scheduler
 * 
 * Creates the schedules based on the array of given schedules.
 * Each schedule is an Object containing an optional time delay and a list of the
 * functions to be executed after that certain time delay.
 * 
 * @param {Array} schedules Is the list of the schedules to be made where each 
 *        schedule is a list of functions to be executed after a certain time
 *        delay
 * @param {Function} onAfterSetup Is a function that exexutes after schedules have
 *        been made
 * @return {Function} It can be called by the client anytime to execute the 
 *         schedules returned earlier
 */
var Scheduler = (function (schedules, onAfterSetup) {
  try {
    // Time delay for a function
    // Initial value is 0
    // If @prop {time} is omitted from the first schedule, then the delay is 0
    var delay = 0;

    schedules.forEach(function (schedule, index) {
      if (schedule instanceof Object && schedule.hasOwnProperty("func")) {
        schedule.hasOwnProperty("time")
          ? (delay = schedule.time)
          : (schedule.time = delay);

        // If a single function is passed in a schedule, make it an array
        schedule.func instanceof Function
          && (schedule.func = [schedule.func]);

      } else {
        throw { message: `Property func not found in Schedule ${index+1}` };
      }
    });

    // After schedules have been set up
    onAfterSetup && onAfterSetup();

    return (function (callback) {
      schedules.forEach(function (schedule, i) {
        schedule.func.forEach(function (func, j) {

          setTimeout(func, schedule.time);
          // last function of the last schedule
          if (i === schedules.length - 1 && j === schedule.func.length - 1) {
            callback && setTimeout(callback, schedule.time);
          }
        });
      });
    });

  } catch (err) {
    console.log(err.message);
    return null;
  }
});
