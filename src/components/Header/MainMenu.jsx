import { v4 as uuidv4 } from 'uuid'

export default function MainMenu({ mainMenu }) {
  return (
    <ul className='flex gap-7'>
      {(mainMenu || []).map(item => (
        <li key={uuidv4()} className='font-bold'>
          <a name={item.url} href={item.url}>
            {item.description}
          </a>
        </li>
      ))}
    </ul>
  )
}
