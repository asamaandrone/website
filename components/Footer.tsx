import { Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="px-8 md:px-36 bg-muted/30 border-t flex flex-col items-center text-center">
      <div className="container py-4">
        <div className="flex justify-center gap-x-10">
          <a href="#!">
            <Twitter size={18} />
          </a>
          <a href="#!">
            <Youtube size={18} />
          </a>
          <a href="#!">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="w-full p-4 text-center font-extralight text-sm">
        Copyright © 2024 Asamaan, Inc. All Rights
        Reserved.
      </div>
    </footer>
  )
}
