Es5 (Ecma Script)
Es6
-----------------

DataTypes
> String  "11", "sdfdsg" ,"true", '222','eeerf'
> Number 867,866.867, 86876786
> Boolean true / false

//Es5
var a = "ef"
var b = 9745847
var c = true


//Es6
let 
const 


var a = 10
var a;  => decalring a variable
a = 10  => assigning a variable

var a = 10

var => we can declare and reassign
let => you cannot redeclare but can reassign
const => you cannot redeclare nor reassign


-------------------------------
a = 1
b = 2
a+b
3
a-b
-1
a*b
2
a/b
0.5


var a = "Hi"
var b = " JavaScript"
var a = "Hi"
var b = " JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN
a+b+1
"Hi JavaScript1"
a+b+10
"Hi JavaScript10"
'1'+'1'
"11"
1+'1'
"11"

1+1+'1' = '21'
'1'+1+1 = '111'

'1'+1+'1'-3

/////
function add(a,b){
    return a+b
}

add(1,2)

//es6
const add = (a,b) => { return a+b }
add(1,2)


////
var a = ['1','ffff',tur,33,'ff','ff',4,4,4,false]
for(i=0;i<a.length;i++){console.log(a[i])}

var a = ['1','ffff',true,33,'ff','ff',4,4,4,false]
a.map((data) => { console.log(data)})


filter  => will only return those value for which condition 
            is true
            > return length of array me vary

map => help to iterarte over the value
        > return length will be same

var num = [1,2,3,4]
num.map((item) => { return item*2})
num.filter((data) => { return data>18})


var a = [18,44,23,19,21,10]
a.filter((data) => { return data>18})
a.map((data) => { return data>18})

var num = [1,2,3,4]
num.map((item) => { return item*2})
(4) [2, 4, 6, 8]
var num = [1,2,3,4]
num.filter((item) => { return item*2})
(4) [1, 2, 3, 4]


var num = [0,1,2,3,4]
num.map((item) => { return item*2})


var num = [0,1,2,3,4]
num.filter((item) => { return item*2})


var num = [1,2,3,4]
num.map((item) => { return item})

var a = [{"name":1,"class":"a"},{"name":2,"class":"b"}]
var b = a.filter((data) => {return data})


truty  1,2,3 1>=
falsy    >0 0