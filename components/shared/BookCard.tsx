import React from 'react'


import { books } from '@/database/books-stubs'
import { Card, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Book } from '@/types'
import { Tag } from './sidebar/RightSidebar'

type Props = {
  book: Book
}

const BookCard = ({book}: Props) => {
  return (
    <Card className="rounded-lg border-none card-wrapper max-w-[325px] hover:scale-105 transition-transform">
      <Image src={`https:${book.cover_image}`} alt={book.title} className="rounded-lg" width={325} height={400} />

      <CardHeader className="gap-3">
        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1 text-center">
          {book.title}
        </h3>
        <div className="flex gap-4 w-full flex-wrap justify-center">
          <Tag>Next.js</Tag>
          <Tag>Next.js</Tag>
          <Tag>Next.js</Tag>
        </div>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-center w-full flex-wrap">
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/like.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">1 votes</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/message.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">2 Answers</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/eye.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">204 Views</p>
            </div>
          </div>
        </div>

        
      </CardFooter>
    </Card>
  )
}

export default BookCard