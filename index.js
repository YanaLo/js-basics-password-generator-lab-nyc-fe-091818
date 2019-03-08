window.addEventListener("load", () => {
  //start your code here
  // 1. figure out how long our password should break
  const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers= "0123456789"
  const specialChar="!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  document.addEventListener('submit',(event)=>{
    // dont go to a new page
    event.preventDefault()
    const input=document.querySelector('input')
    const passwordLength=parseInt(input.value,10)
    console.log(passwordLength)
    if(passwordLength<4){
      alert("Enter more than 4")
      return
    }
    let password=""
    for (let i=0;i<passwordLength;i++){
  
      const randomLowerCaseLetters=Math.round(Math.random() *lowerCaseLetters.length)
      password+=lowerCaseLetters[randomLowerCaseLetters]
         if (password.length===passwordLength){
        break
      }
      const randomUpperCaseLetters=Math.round(Math.random() *upperCaseLetters.length)
      password+=upperCaseLetters[randomUpperCaseLetters]
         if (password.length===passwordLength){
        break
      }
       const randomNumbers=Math.round(Math.random() *numbers.length)
      password+=numbers[randomNumbers]
         if (password.length===passwordLength){
        break
      }
      const randomSpecial=Math.round(Math.random() *specialChar.length)
      password+=specialChar[randomSpecial]
         if (password.length===passwordLength){
        break
      }
  }
  console.log(password)
  const result=document.querySelector('#result')
  result.innerText=password
  // 2. we need to make a password from the ground up
});
})
