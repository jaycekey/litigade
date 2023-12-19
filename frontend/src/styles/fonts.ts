import { Martel, Montserrat, Open_Sans } from 'next/font/google'

const martel700 = Martel({weight: '700', subsets: ['latin'] })
const martel900 = Martel({weight: '900', subsets: ['latin'] })
const monserrat400 = Montserrat({weight: '400', subsets: ['latin'] })
const monserrat500 = Montserrat({weight: '500', subsets: ['latin'] })
const openSans400 = Open_Sans({weight: '400', subsets: ['latin'] })
const openSans600 = Open_Sans({weight: '600', subsets: ['latin'] })
const openSans700 = Open_Sans({weight: '700', subsets: ['latin'] })

export { martel700, martel900, openSans400, openSans600, openSans700, monserrat400, monserrat500 }