import { v4 as uuidv4 } from 'uuid'
import CharacterCard from './Character-Card'

export default function Characters({ characters }) {
  const { results } = characters
  if (results.length > 0) {
    return (
      <section className='w-full px-[27px] py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-auto'>
          {results.map(card => (
            <CharacterCard key={uuidv4()} card={card} />
          ))}
        </div>
      </section>
    )
  }

  return null
}
