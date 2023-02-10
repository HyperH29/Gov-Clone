function Header () {
// Headrer component

  return (
      // This will render the header component
      <div className={"w-100 vh-50 p-5 bg-primary"}>
          <div className={"container-md"}>
          <h1 className={"text-white fw-bolder py-2"}>Welcome to GOV.UK</h1>
          <p className={"text-white fst-normal pt-4"}>The best place to find government services and information</p>
          <p className={"text-white fw-bold"}>Simpler, clearer, faster</p>
          </div>
      </div>
  )
}

export default Header