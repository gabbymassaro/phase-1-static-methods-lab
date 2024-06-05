class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "", /\s/)
  }
  static titleize(string) {
    let title = ""
    const dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    string.split(" ").forEach((word, index) => {
      if (dontCapitalize.includes(word) && index !== 0) {
        title += word + " "
      } else {
        const capitalize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        title += capitalize + " "
      }
    })
    return title.trim()
  }
}