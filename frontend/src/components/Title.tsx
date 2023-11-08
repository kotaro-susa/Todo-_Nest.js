type Props = {
  children?: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <div className='text-center'>
      <h2 className='mt-2 text-2xl font-bold leading-6 text-gray-900'>{children}</h2>
    </div>
  )
}

export default Title
