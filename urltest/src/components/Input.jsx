
const Input = () => {
  return (
    <>
      <div className="flex gap-4 max-h-screen justify-center items-center mt-10 relative  ">
       <div className=" w-sm bg-amber-100 flex justify-center py-3 gap-19 rounded-2xl">
         <input
         type="text"
          placeholder='Paste long url here...'
          className="focus:outline-none focus:ring-0 focus:border-transparent"

          />
        <button className='bg-black border-2 border-black text-white rounded-full py-2 px-3 active:scale-95'>Shorten</button>
       </div>
      </div>
    </>
  )
}

export default Input
