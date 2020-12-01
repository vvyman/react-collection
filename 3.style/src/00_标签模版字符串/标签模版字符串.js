const name = 'Wyman'
const age = 20
const level = 99

// 模版字符串的使用
console.log(`my name is ${name}, age is ${age}, level is ${level}`)

//函数使用
function test(...args) {
  console.log('args', args)
}

test`my name is ${name}, age is ${age}, level is ${level}`


