import at from 'images/nav/at.svg'
import pen from 'images/nav/pen.svg'
import imac from 'images/nav/imac.svg'
import github from 'images/nav/github.svg'
import twitter from 'images/nav/twitter.svg'
import speedometer from 'images/nav/speedometer.svg'

const data = [
  { label: 'Email', svg: at, path: '/email', isReleased: false },
  { label: 'Skills', svg: speedometer, path: '/skills', isReleased: false },
  { label: 'Projects', svg: imac, path: '/projects', isReleased: false },
  { label: 'Rantings', svg: pen, path: '/blog', isReleased: false },
  {
    label: 'GitHub',
    svg: github,
    path: 'https://www.github.com/dnlthn',
    isReleased: false,
  },
  {
    label: 'Twitter',
    svg: twitter,
    path: 'https://www.twitter.com/dnlthn',
    isReleased: false,
  },
]

export default data
