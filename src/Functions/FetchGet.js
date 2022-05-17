export default class FetchGet {

  constructor(host, apiToken) {
    this.host = host // http://localhost:8090
    this.apiToken = apiToken
  }

  async getJSON(url, func = false) {

    if (!this.apiToken) return

    await fetch(`${ this.host }${ url }&apiToken=${ this.apiToken }`)
    .then(res => res.json())
    .then(data => {
      if (func && typeof func == "function") func(data)
      else return data
    })

  }

  async getText(url, func = false) {

    if (!this.apiToken) return

    await fetch(`${ this.host }${ url }&apiToken=${ this.apiToken }`)
    .then(res => res.text())
    .then(data => {
      if (func && typeof func == "function") func(data)
      else return data
    })

  }

  getVideoCount() {
    // this.getJSON()
  }

  getComments() {


  }

}
