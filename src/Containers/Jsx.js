let name = 'Mohan'
function checkAlphabet(char){
  switch(char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return <div>Vowel</div>
    default:
      return<div>Not Vowel</div>

  }
}
function checkEvenOrOdd(num){
  if(num%2===0){
    return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}
const user = [
  {name: 'Ram', age :11},
  {name: 'Sham', age :31},
  {name: 'mohan', age :14}
]
export function Greet(){
    return(
     <h2>Hello</h2>
    );
}
let num =4;
function Jsx() {
  return (
    <div>
      <h2> Hello {name}   </h2>
      <div>
      {
      checkEvenOrOdd(6)
    }
    {
      num % 2 ===0 ? <div>Even Number</div> : <div> Odd Number </div>
    }
    <h3>If Statment</h3>
    {
      num % 2===0 && <div>Even</div> // logical
    }
    {
      num % 2===0 && <div>Odd</div>
    }
    {/* {
      ((num) =>{
        if(num%2==0){
          return <div>Even</div>
        }
        else{
          return <div>Odd</div>
        }
      }

      )(6)

    } */}
      </div>
      <h3>Loop</h3>
      {
        user.map((item, index) =>{
          return <div key ={index}>
          {item.name}-{item.age}
        </div>
        }
        )
      }
      {
        <h3>switch</h3>
      }
      {
        checkAlphabet('z')
      }

    </div>   
  );
}
export default Jsx;
