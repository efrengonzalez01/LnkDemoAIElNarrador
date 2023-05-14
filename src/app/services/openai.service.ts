import { Injectable } from '@angular/core';
import { enviroment } from 'src/Enviroments/Enviroment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor() { }

  async sendTranscript(transcript: string): Promise<string>  {
    const openaiAPIKey = enviroment.apiKey;
    const url = enviroment.baseUrl;
   // const url = 'https://api.openai.com/v1/audio/transcriptions';
    const prompt = `Convert the following speech to text: "${transcript}"`;
    const data = {
      prompt,
      max_tokens: 60,
      n: 1,
      stop: '.',
      temperature: 0.5,
    };
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${openaiAPIKey}`,
      },
    });
    const text = response.data.choices[0].text;
    console.log('OPENAI',text);
    return text
  }


}
