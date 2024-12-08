export default function Header() {
  return (
    <>
      <header className="w-full h-[35vh] sm:h-[30vh] md:h-[35vh] lg:h-[35vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/691280372/photo/close-up-of-people-hands-taking-slices-of-pizza-on-a-wooden-surface.jpg?s=612x612&w=0&k=20&c=O-M3O0SIN32NNb8Kdh0wzNuxy5ptFA_0Xp0WT8zbwIY=')] text-white px-4 relative">
        <div className="absolute inset-0 bg-white/60 z-0"></div> 

        <div className="text-center text-black z-10 relative">
          <h2 className="font-sans text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold">
            Optimized Your Meal
          </h2>

          <p className="mt-5 text-sm">Select Meal to Add in Week. You will be able to edit, modify, and change the Meal Weeks.</p>
        </div>
      </header>
    </>
  )
}