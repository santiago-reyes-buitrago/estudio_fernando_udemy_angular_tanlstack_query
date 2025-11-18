import {GetIssues} from '@core/interfaces';
import {sleep} from '@helpers/sleep.helper';
import {environment} from '@env/environment';

export const getIssueByIdAction = async (id:string): Promise<GetIssues> => {
  await sleep(1000);
  try {
    const response = await fetch(`${environment.GITHUB_API_URL}/issues/${id}`,{
      headers: {
        Authorization: `token ${environment.GITHUB_TOKEN}`
      }
    });
    if (!response.ok) throw 'Error al obtener los issue';
    return await response.json() as GetIssues;
  }catch (e) {
    console.log(e)
    throw 'Error al obtener los issue'
  }

};
