
import axios from "axios";
 function getLogin(body) {
  let token=''
   axios
    .post("http://192.168.3.17:82/api/v1/UsersApi/SignIn", body
    ,{
        headers:{
          "Content-Type": "application/json",
        }
    })
   
    .then((res) => {
      console.log(res);
      token=res.data
    })
    .catch((error) => {
      console.log(error);
    });

    // if(token !=''){
    //   axios
    //   .post("http://192.168.3.17:82/api/v1/UsersApi/callMVCAction"
    //   ,{
    //       headers:{
    //         "Content-Type": "application/json",
    //       }
    //   })
     
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }); 
    // }

}
export { getLogin };
