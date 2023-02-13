export const formatBigNums = (number: number) => {
  const num = number.toString()

  const floorNum = num.toString().split('.')[0]

  let wholePath = floorNum.length % 3
  let stringPath = (floorNum.length - wholePath) / 3

  if (wholePath === 0 && stringPath > 1) {
    wholePath = 3
    stringPath -= 1
  }
  if (wholePath === 0 && stringPath === 1) stringPath = 0

  switch (stringPath) {
    case 0: {
      return num
    }
    case 1: {
      return num.slice(0, wholePath) + ' ' + 'k'
    }
    case 2: {
      return num.slice(0, wholePath) + ' ' + 'M'
    }
    case 3: {
      return num.slice(0, wholePath) + ' ' + 'B'
    }
    case 4: {
      return num.slice(0, wholePath) + ' ' + 'T'
    }
    case 5: {
      return num.slice(0, wholePath) + ' ' + 'qd'
    }
    case 6: {
      return num.slice(0, wholePath) + ' ' + 'Qn'
    }
    case 7: {
      return num.slice(0, wholePath) + ' ' + 'sx'
    }
    case 8: {
      return num.slice(0, wholePath) + ' ' + 'Sp'
    }
    case 9: {
      return num.slice(0, wholePath) + ' ' + 'O'
    }
    case 10: {
      return num.slice(0, wholePath) + ' ' + 'N'
    }
  }
  return 0
}
