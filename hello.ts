const date = '2020-01-02'

const converted = date.replace(/(\d+)-(\d+)-(\d+)/, (originStr, year, month, day) => {
  console.log('### parsed', {originStr, year, month, day});
  return `${year}~${month}~${day}`
})

console.log('### converted', converted)
