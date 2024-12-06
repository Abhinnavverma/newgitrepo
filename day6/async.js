const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data send success");
    }
    else{
        reject=("Data failed to send");
    }
});
myPromise
.then((message)=>console.log(message))
.catch((error)=>("Error fetching data"+error));
function task(message, delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
        });
    
}
task('First task completed',1000)
.then(() => task('Second task completed',2000))
.then(() => task('third task completed',3000))