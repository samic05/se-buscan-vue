import axios from "axios";

const missingPeopleApi = axios.create({
  baseURL: "https://54.214.124.160/missing",
});

export default missingPeopleApi;
