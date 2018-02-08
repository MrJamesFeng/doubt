const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function startCaculate(res){
  var subjects = res
  for(var index in subjects){
    var subject = res[index];
    var stars = subject.rating.stars
    var starsNum = parseInt(parseInt(stars) / 10)
    var starsArr = []
    for(var i =1;i<6;i++){
      starsArr[i-1] = i<=starsNum?1:0
    }
    
    subject.rating.stars = starsArr
    // console.log(subject.rating.stars)
    subjects[index] = subject;
  }
  // console.log(subjects);
  return subjects
}


module.exports = {
  formatTime: formatTime,
  startCaculate: startCaculate
}
