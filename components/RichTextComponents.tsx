import Link from "next/link"
import Image from "next/image"
import urlFor from "../lib/urlFor"

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto" >
          <Image className="object-contain"
            src={urlFor(value).url()}
            alt="Blog post image"
            fill />
        </div >
      );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <Link href={value.href}
          rel={rel}
          className="underline decoration-[#26a69a] hover:decoration-black">
          {children}
        </Link>
      )
    },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => <ol className="m-auto text-lg">{children}</ol>,
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-4xl py-10 font-bold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-3xl py-10 font-bold">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-2xl py-10 font-bold">{children}</h4>,

    blockquote: ({ children }: any) => <blockquote className="border-l-[#26a69a] pl-5 py-5 my-5">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
}

