import Logo from './Logo'
import MainMenu from './MainMenu'

export default function Header({ mainMenu }) {
  return (
    <nav className='flex w-full px-[27px] h-[60px] justify-between items-center'>
      <Logo />
      <MainMenu mainMenu={mainMenu} />
    </nav>
  )
}
