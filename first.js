//8
function func(arr1) {
    var sum = 0;
    arr1.forEach(element => {
        sum += element;
    });
    let avg = sum / arr1.length;
    return avg;
}
let arr1 = [-3, 5, -7, -3, 2, -1, 8, 10];
console.log(func(arr1));


//7
function func2(arr2) {
    for (let index = 0; index < arr2.length; index++) {
        if (arr2[index].length < 6) {
            for (let i = index; i < arr2.length; i++) {
                arr2[i] = arr2[i + 1];
                arr2.pop();
            }
        }
    }
    console.log(arr2);
}
let arr2 = ["apple", "banana", "cherry", "blueberry", "mango", "sky"]
func2(arr2);

//6
function func3(arr3) {
    for (let index = 0; index < arr3.length; index++) {
        if (arr3[index] > 0) {
            arr3[index] = "-" + arr3[index]
        }
    }
    console.log(arr3);
}
let arr3 = [-3, 5, -7, -3, 2, -1, 8, 10]
func3(arr3);

//5
function func4(arr4) {
    largest = arr4[0];
    for (let index = 0; index < arr4.length; index++) {
        if (largest.length < arr4[index].length) {
            largest = arr4[index];
        }
    }
    console.log(largest)
}
let arr4 = ["apple", "banana", "cherry", "blueberry", "mango", "sky"];
func4(arr4);

//4
function func5(arr5, arr6) {
    let arr7 = [];
    count=0;
    arr5.forEach(element => {
        arr6.forEach(element1 => {
            if (element == element1) {
                arr7[count]=element;
                count++;
            }
        });
    });
    console.log(arr7);
}
func5([1,2,3,4,5],[3,4,5,6,7]);

//9

function func6(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        let sqr=i*i;
        sum +=sqr;
    }
    console.log(sum);
}
func6(2,4);

//10
function fun7(start1,end1,limit){
    let sum=0;
    for (let i = start1; i <=end1; i++) {
        if(sum < limit-i) {
            sum +=i;
        }       
    }
    console.log(sum);
}
fun7(10,50,100);

//3
function fun8(arr7,arr8){
    let arr9=[]=arr7;
    arr8.forEach(element => {
        let flag= true;
        arr7.forEach(element1 => {
            if (element == element1) {
             flag=false;
              
            }
        });
        if (flag) {
            arr9.push(element);
        }
        
    });
    console.log(arr9);
    
}
fun8([1,2,3,4,5],[3,4,5,6,7]);


//2
function fun9(arr10){
    arr11=[];
    arr10.forEach(element => {
        let count=0;
    arr10.forEach(element1 => {
        if(element==element1){
            count++;
        }
    });
    if(count<2){
        arr11.push(element);
    }
        
    });
    console.log(arr11);
}
fun9([54,7,9,1,8,7,54,8,5,88,44]);