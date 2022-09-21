

const Header = (props) => {
	return (
	<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	console.log(props);
	return (
	<div>
	     <p>{props.part} {props.ex}</p>
	</div>
	)
}

const Content = (props) => {
        //console.log(props);	
	return (
	<div>
            <Part part={props.parts[0].name} ex={props.parts[0].exercise}/>
	    <Part part={props.parts[1].name} ex={props.parts[1].exercise}/>
	    <Part part={props.parts[2].name} ex={props.parts[2].exercise}/>
	</div>
	)
}
const Total = (props) => {
	//console.log(props);
	return (
	<div>
	    <p>Number of exercises {props.allexercises}</p>
	</div>
	)
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
	  {
	   name: 'Fundamentals of React',
           exercise: 10
	  },
	  {
           name: 'Using props to pass data',
	   exercise: 7 
	  },
	  {
           name: 'State of a component',
           exercise: 14
	  }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total allexercises={parts[0].exercise + parts[1].exercise + parts[2].exercise}/>
    </div>
  )
}
export default App
