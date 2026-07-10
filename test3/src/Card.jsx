
const Card = ({key,image,author}) => {
  return (
    <div>
      <img
              loading="lazy"
              height={200}
              key={key}
              src={image}
              alt={author}
            />
    </div>
  )
}

export default Card
