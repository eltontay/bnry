

const WrapperContent = ({className, children}) => {
  return (
    <div className={className + ' px-6 w-full md:px-20 lg:px-36 lx:px-80'}>
      {children}
    </div>
  )
}

export default WrapperContent
