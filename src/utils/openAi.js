
import OpenAI from "openai";

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const token = process.env.REACT_APP_GITHUB_TOKEN;

const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: token,
  dangerouslyAllowBrowser: true
});

export default client;
