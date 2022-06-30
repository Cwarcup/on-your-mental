// background for card

const CardWrapper = ({ children }) => {
  return (
    <>
      <div className="rounded bg-cardBg shadow-lg">{children}</div>
    </>
  )
}

export default CardWrapper
