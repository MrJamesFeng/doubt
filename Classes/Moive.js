class Moive{
  constructor(url,cb){
    this.url = url
    this.cb = cb
    console.log("constructor")
  }
  getMoiveData(){
    // this.cb(this.url+"------------------------------------->")
    this.dealData(function(res){
      console.log(this)
      this.cb(this.url+res)
    }.bind(this))
  }
  // getMoiveData(){
  //   this.dealData((res)=>{
  //     this.cb(this.url + res)
  //   })
  // }
  dealData(cb){
    cb("dealData---------->")
  }
}
export {Moive}

/*
this 表示调用函数的调用者
=> 表示函数的定义者
*/ 