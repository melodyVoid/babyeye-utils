function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (item, index) => {
    return arr.slice(index * size, index * size + size)
  })
}

export default chunkArray
