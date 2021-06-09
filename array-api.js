// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result); // apple, banana, orange
  //? arr.join()? 배열에 있는 모든 아이들을 정해서 string으로 전달해주는데
  //? 안에 넣어주는걸로!! 구분자를 만듦
  //? 구분자를 안넣으면 자동으로 콤마
}

// Q2. make an array out of a string -> ['🍎', '🥝', '🍌', '🍒']
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  //? str.split(구분자, 리밋? : 리턴받을 배열의 사이즈 -- 써도되고 안써도 됨)
  //? 구분자로 배열로 만들어주는 것.
  const result = fruists.split(',',2) //를 해주면 첫번째 두개의 값 입력 받는것.
  console.log(result) // ['🍎', '🥝']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  //! array.reverse는 배열의 값을 반대로 바꿔줌.
  //? 배열 자체를 변화시키는것 !!! not immutable
  
}

// Q4. make new array without the first two elements --> [3,4,5]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  //! splice는 배열 자체를 제거해줌
  //?  배열을 새로 만들어야 하는게 아니면 
  //? array.splice(0,2) 사용 가능
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  //? arr.find((func)=>) 은
  //? 만든 func의 식이 트루이면 찾은 가장 첫번째 조건을 출력
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  //? arr.filter((func)=>)은
  //? 만든 func의 식에 쓴 값을 받을 수 있음
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student)=> student.score);
  //? arr.map ((func)=>)은
  //? 배열의 값을 내가 원하는 새로운 값으로 변환
  //? 배열안에 들어있는 모든 요소들을 우리가 전달해준 함수를 호출하면서
  //? 콜백함수에서 가공되어진 리턴되어진 값으로 대체.
  //! 배열안에 있는 요소들을 우리가원하는 함수를 이용해서 다른 방식의 데이터를 만들고 싶을때 사용하면 되는 Map!

}

// Q8. check if there is a student with the score lower than 50 --> //true or false 출력해야함.
{
 
  const result = students.some((student) => student.score < 50)
  //? arr.some ((func)=>)은
  //? 배열의 요소중에서 콜백함수가 리턴이 트루가 되는 애가 있는지 없는지 확인해주는 것
  //! 배열에서 하나라도 이 조건에 만족되는 사람이 한명이라도 있으면 true리턴.
  const result2 = !students.every((student) => student.score >= 50)
  //? arr.every ((func)=>)은
  //? 배열의 모든 요소들이 충족해야지만 true가 리턴이 됨
  //! 모든 배열의 조건이 만족 되어야 할때는 every사용.

}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr)=>  prev + curr.score,0)
  console.log(result/students.length)
  //? arr.reduce((func)=>)은
  //? 배열에 있는 모든 요소들의 값을 누적하는 함수
  //? 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
  //? arr.reduceRight((func)=>)은 배열의 뒤부터 모든 배열 도는것
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => students.score)
  .join();
  //? 만약 50점 이상인 애들만 출력하고 싶다면?
  const result = students
  .map((student)=> students.score)
  .filter((score) => score >= 50)
  .join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => students.score)
  .sort((a,b)=> a - b)
  .join() 
  //? arr.sort((func))은
  //? 이전값과 현재값을 비교해서 더 작은순부터 큰수까지 정렬해서 배열을 만들어주는 것
  //! 큰게 먼저 나오게 하고싶으면 (a, b) => b - a 로 하면 됨 !
}
