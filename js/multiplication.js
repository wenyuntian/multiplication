// 原码一位乘法
let multiplication = (mult_1, mult_2) => {
  mult_1 = mult_1.split('');    // 将输入的字符串转换为数组
  mult_2 = mult_2.split(''); 
  let flag = mult_1.shift() ^ mult_2.shift(),   // 计算符号位
      register = new Array(mult_1.length + 2).fill(0),    // 寄存器
      temp = [];
      
  for(let k=0; k<2; k++){
    mult_1.unshift('0');
    mult_2.unshift('0');
  }
  for(let i=mult_2.length-1; i>1; i--){
    let count = 0
    let test = [];
    if(mult_2[i] == 1){
      for(let j=mult_1.length-1; j>=0; j--){
        if((Number(mult_1[j]) +  Number(register[j]) + count) < 2){
          test.unshift(Number(mult_1[j]) + Number(register[j]) + count)
          count = 0;
        }
        else{
          test.unshift((Number(mult_1[j]) +  Number(register[j]) + count) % 2)
          count = 1;
        }
      }
      register = test;
    }

    temp.unshift(register.pop());
    register.unshift(0);
  }
  for(let m=0; m<2; m++){
    register.shift()
  }
  return `${flag}.${register.concat(temp).join('')}`
}


$(document).ready(function(){
  $('.multip_one_0, .multip_one_1').bind('click', function(){
    let This = $(this)
    $('.multip_one').text($('.multip_one').text()+ This.text())
  })
  $('.multip_two_0, .multip_two_1').bind('click', function(){
    let This = $(this)
    $('.multip_two').text($('.multip_two').text()+ This.text())
  })
  $('.clear_one').bind('click', function(){
    $('.multip_one').text('')
  })
  $('.clear_two').bind('click', function(){
    $('.multip_two').text('')
  })
  $('.caculate').bind('click', function(){
    $('.result').text(multiplication($('.multip_one').text(),$('.multip_two').text()))
  })
  $('.clear_result').bind('click', function(){
    $('.result').text('')
  })
})