const titleCased = () => {
  return tutorials
}
//describe('index.js', function () {
  const skySchool = ["aki", "guadalupe", "lei", "aalam"];
  const rolCall = [];
  
  for (const student of skiSchool) {
    rollCall.push(student + " the skier");
  }
  
  //=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];

  //describe('titleCased()', function () {

function studentRollCall(student) {
  return student + " the skier";
}

const skSchool = ["aki", "guadalupe", "lei", "aalam"];
const roCall = skiSchool.map(studentRollCall);
//=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];
    it('returns an array with title case tutorial names', function () {
      expect(titleCased()).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Constructor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
      ]
      )
// When the parameter list is only one element, we can drop () !
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map((student) => student + " the skier");
//=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];
const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);

/*
 Result:
 [
   { name: 'Johnny 5', modes: 10, isActivated: true },
   { name: 'C3PO', modes: 6, isActivated: true },
   { name: 'Sonny', modes: 5, isActivated: true },
   { name: 'Baymax', modes: 3, isActivated: true }
 ]
*/
const tutorials =
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?'
  'implementing Blockchain Web API'
  'The Test Driven Development Workflow'
  'What is NaN and how Can we Check for it'
  'What is the difference between stopPropagation and preventDefault?'
  'Immutable State and Pure Functions'
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?'
  'what is JSONNP`
