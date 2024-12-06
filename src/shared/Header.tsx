import { Children, isValidElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeaderTitleProps {
  children?: ReactNode
}

interface HeaderMainProps {
  children?: ReactNode
  isShow: boolean
}

interface HeaderBtnListProps {
  children?: ReactNode
}

interface HeaderBtnProps {
  url?: string
  children?: ReactNode
}

const HeaderTitle = ({ children }: HeaderTitleProps) => {
  return <h1 className="text-lg font-bold">{children}</h1>
}
const HeaderBtnList = ({ children }: HeaderBtnListProps) => {
  return <ul className="flex space-x-4">{children}</ul>
}

const HeaderBtn = ({ url, children }: HeaderBtnProps) => {
  return (
    <li>
      <Link to={url} className="cursor-pointer hover:underline">
        {children}
      </Link>
    </li>
  )
}

const HeaderTitleType = (<HeaderTitle />).type
const HeaderBtnListType = (<HeaderBtnList />).type

function getHeaderTitle(children: ReactNode) {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === HeaderTitleType).slice(0, 1)
}

function getHeaderBtnList(children: ReactNode) {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === HeaderBtnListType).slice(0, 1)
}

function HeaderMain({ children, isShow }: HeaderMainProps) {
  if (!isShow) {
    return null
  }

  const headerTitle = getHeaderTitle(children)
  const headerBtnList = getHeaderBtnList(children)

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {headerTitle && <>{headerTitle}</>}
        <nav>{headerBtnList && <>{headerBtnList}</>}</nav>
      </div>
    </header>
  )
}

export const Header = Object.assign(HeaderMain, {
  Title: HeaderTitle,
  BtnList: HeaderBtnList,
  Btn: HeaderBtn,
})
