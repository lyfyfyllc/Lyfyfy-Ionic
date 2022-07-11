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
    .then(res => res.json())
    .then(data => {
      if (func && typeof func == "function") func(data)
      else return data
    })

  }

  async sendData(clientID, url, formData, func = false) {

    try {

      await fetch(`${ this.host }${ url }&apiToken=${ this.apiToken }&clientSideID=${ clientID }`, {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (func && typeof func == "function") func(data)
        else return data
      })

    } catch (e) { console.log(e) }

  }

  getVideoCount() {
    // this.getJSON()
  }

  getComments() {


  }

}
