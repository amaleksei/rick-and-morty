import Image from 'next/image'

export default function CharacterCard({ card }) {
  if (card?.id > 0) {
    const { name, status, image, species } = card
    return (
      <article className='flex flex-1 grow w-full h-[220px] rounded-md overflow-hidden bg-gray-700 text-white'>
        <div className='w-1/3 relative'>
          <Image src={image} layout='fill' objectFit='cover' />
        </div>
        <div className='py-2 ml-2'>
          <div>
            <h2 className='text-bold text-xl mb-2'>{name}</h2>
          </div>
          <div>
            {status} - {species}
          </div>
        </div>
      </article>
    )
  }

  return null
}
