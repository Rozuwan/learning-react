import Card from "./Card"


const CardPage = (props) => {
  
  return (
    <div className="px-5 h-screen w-screen bg-black">
      <Card mountains={props.mountains} />
    </div>
  )
}

export default CardPage
