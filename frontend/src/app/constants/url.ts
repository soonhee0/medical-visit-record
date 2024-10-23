// APIUrlというオブジェクトを作成して、ローカル環境と本番環境のapiのURLを環境変数によって取得できるようにする
const env=process.env.NEXT_PUBLIC_ENV;

export const ApiUrl={
    BASE_API_URL:
     env!=="local"
     ?process.env.NEXT_PUBLIC_BASE_API_URL
     :"http://localhost:3000",
    API_USER_LIST:(id:string)=>
        env !== "local"? "v1/api/users/${id}/"
                       :"api/users/${id}/",

    API_CREATE_USER_RECORD:(id:string)=>
        env !=="local" ? "/v1/api/users/${id}/create-record"
                       : "/api/users/${id}/create-record",
    API_PAST_RECORDS:(id:string)=>
        env !=="local" ? "/v1/api/users/${id}/past-records" 
                       : "/api/${id}/past-records",
    API_HOSPITAL_RECORDS:(id:string)=>
        env !=="local" ? "/v1/api/users/${id}/hospital-records"
                       : "/api/users/${id}/hospital-records",
}