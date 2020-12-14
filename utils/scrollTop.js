export function scrollTop() {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
