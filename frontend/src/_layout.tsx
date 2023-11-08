type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
