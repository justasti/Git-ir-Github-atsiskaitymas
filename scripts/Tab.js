export default class Tab {
  constructor(props) {
    this.props = props

    return this.render()
  }

  render() {
    this.tab = document.createElement('div')
    this.tab.className = 'modal'

    this.closeButton = document.createElement('img')
    this.closeButton.className = 'close_modal'
    this.closeButton.src = './resources/xmark-solid.svg'
    this.closeButton.addEventListener('click', () => this.tab.remove())


    this.tabName = document.createElement('h2')
    this.tabName.className = 'tab_name'
    this.tabName.textContent = this.props.title

    this.mediaType = this.props.img.split('.')[this.props.img.split('.').length - 1]
    if (this.mediaType === 'mp4') {
      this.img = document.createElement('iframe')
    } else {
      this.img = document.createElement('img')
      this.img.alt = this.props.title
    }
    this.img.src = this.props.img
    this.p1 = document.createElement('p')
    this.p1.textContent = 'Lorem ipsum dolor sit amet adipisicing elit. Itaque vero reprehenderit doloribus impedit laudantium autem odio voluptas quidem, excepturi, porro repellat dolorem quisquam, beatae necessitatibus ex! Nam ullam quidem deserunt.'
    this.p2 = document.createElement('p')
    this.p2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis aliquam quasi dolores facere? Doloribus cupiditate ea culpa, quaerat beatae, dolore molestiae repellendus illo quae recusandae quisquam commodi earum deleniti.'

    this.tab.append(this.closeButton, this.tabName, this.img, this.p1, this.p2)
    return this.tab
  }
}