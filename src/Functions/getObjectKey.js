export default function getObjectKey(data) {
  data = data.replace("https://lyfyfy.nyc3.digitaloceanspaces.com/", '')
  let key = data.replace("//", '/')

  return `https://lyfyfy.nyc3.digitaloceanspaces.com/${ key }`
}
