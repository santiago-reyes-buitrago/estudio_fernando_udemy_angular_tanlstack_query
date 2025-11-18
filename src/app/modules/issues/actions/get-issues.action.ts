import {GetIssues} from '@core/interfaces';
import {sleep} from '@helpers/sleep.helper';
import {environment} from '@env/environment';

export const getIssuesAction = async (): Promise<GetIssues[]> => {
  await sleep(1000);
  try {
    const response = await fetch(`${environment.GITHUB_API_URL}/issues`,{
      headers: {
        Authorization: `token ${environment.GITHUB_TOKEN}`
      }
    });
    if (!response.ok) throw 'Error al obtener los issues';
    return await response.json() as GetIssues[];
  }catch (e) {
    console.log(e)
    throw 'Error al obtener los issues'
  }

};
