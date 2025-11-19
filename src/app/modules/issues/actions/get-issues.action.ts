import {GetIssues, ParamInterface, State} from '@core/interfaces';
import {sleep} from '@helpers/sleep.helper';
import {environment} from '@env/environment';

export const getIssuesAction = async (parameters: ParamInterface): Promise<GetIssues[]> => {
  const {state = State.All,labels = []} = parameters;
  console.log(parameters)
  await sleep(1000);
  const params = new URLSearchParams();
  params.append('state',state);
  params.append('labels',labels.length > 0 ? labels.join(','):'');
  try {
    const response = await fetch(`${environment.GITHUB_API_URL}/issues?${params}`,{
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
