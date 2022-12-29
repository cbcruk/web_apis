import { atom } from 'jotai'

const fontFace = new FontFace(
  'Material Symbols Outlined',
  'url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v75/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsLjBuVY.woff2)',
)

export const fontsAtom = atom(async () => {
  await fontFace.load()

  return true
})
