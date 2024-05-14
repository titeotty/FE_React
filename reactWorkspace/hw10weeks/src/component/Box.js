import "./Box.css";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <h2>WIN</h2>
    </div>
  )
}

export default Box;