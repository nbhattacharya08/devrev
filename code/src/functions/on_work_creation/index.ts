import axios , {AxiosResponse} from 'axios';
export const run = async (events: any[]) => {
  events.forEach(async (event) => {
    console.info(`Event ${event.payload.work_created.work.type} has been received.`);
    if(event.payload.work_created.work.type === 'ticket') {
      // Do something
      const result = await addIssue()
    }
  })
  console.info(`The work ${events[0].payload.work_created.work.id} has been created.`)
};

const addIssue = async () => {
  
  // API call to get prev issues
  const config = {
    headers: {
      'Authorization': "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL3lIeURwd3o0OmRldnUvMyIsImV4cCI6MTc4OTY1NTQzOCwiaHR0cDovL2RldnJldi5haS9hdXRoMF91aWQiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vc3VwZXI6YXV0aDBfdXNlci9nb29nbGUtb2F1dGgyfDEwOTgyODk4NTIwMzYxMjIyNzY4NSIsImh0dHA6Ly9kZXZyZXYuYWkvYXV0aDBfdXNlcl9pZCI6Imdvb2dsZS1vYXV0aDJ8MTA5ODI4OTg1MjAzNjEyMjI3Njg1IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by95SHlEcHd6NCIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b2lkIjoiREVWLXlIeURwd3o0IiwiaHR0cDovL2RldnJldi5haS9kZXZ1aWQiOiJERVZVLTMiLCJodHRwOi8vZGV2cmV2LmFpL2Rpc3BsYXluYW1lIjoibmlsYW5qYW5iaGF0dGFjaGFyeWEyMiIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJuaWxhbmphbmJoYXR0YWNoYXJ5YTIyQGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJOaWxhbmphbiBCaGF0dGFjaGFyeWEiLCJodHRwOi8vZGV2cmV2LmFpL2lzX3ZlcmlmaWVkIjp0cnVlLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6cGF0IiwiaWF0IjoxNjk1MDQ3NDM4LCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by95SHlEcHd6NDp0b2tlbi9iMk8xNk5jZSIsIm9yZ19pZCI6Im9yZ19IVlBYWUFOUFNpcDFKQ1lYIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL3lIeURwd3o0OmRldnUvMyJ9.riTCPgsDXHESE7Icomvg5dZSxE_iYq_W5zBIMM1X8hgq_4sx-myiGE8c4XJy5w3_binwhFCU15ippOyUlJ9PcY2A8YNtX8RHb93K0R4RZ1SEI33YfMEupbvDjN46SXcQS8sItyrWLiy2ewXHH0J2J0TB7JWaiSRPQG6hgHg7ConkqDcLLPcW77GUyesancMOlWxWpJX3jWqyRovUDQ8HRuA67iKGApjn7zda-9cbxYcMopwI_hebCgRAbZR7OCW-ZpesQ2HwOrfpsoqNoqr86Zd13seLNHqAbMwbCDddiaW298FIj5FhEAwuPgwyeVyU-qSjUaF8EPAm1FLBcJBDxQ",
      'Content-Type': 'application/json'
    }
  }
  const res = await axios.get('https://api.devrev.ai/works.list' , config)
  .then((response: AxiosResponse) => {
    return response.data
  })
  .catch((err) => {
    console.log(err)
  })
  console.log(res.works)

  
  // Send prev issues + new issue to openai and get matching issue
  // create or add issue

}

export default run;