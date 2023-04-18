import Tab from './Tab.js'

const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => tab.addEventListener('click', e => {
  const title = e.target.textContent
  let img

  switch (title) {
    case 'intro':
      img = './resources/tab-1.mp4'
      break;
    case 'work':
      img = './resources/tab-2.jpg'
      break;
    case 'about':
      img = './resources/tab-3.jpg'
      break;
    case 'contact':
      img = './resources/tab-4.jpg'
      break;

    default:
      break;
  }

  const newTab = new Tab({ title, img })
  document.body.append(newTab)
}))