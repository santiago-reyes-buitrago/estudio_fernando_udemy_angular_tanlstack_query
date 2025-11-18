import {environment} from '@env/environment';
import {GetLabelInterface} from '@core/interfaces';
import {sleep} from '@helpers/sleep.helper';

export const getLabelsAction = async (): Promise<GetLabelInterface[]> => {
  await sleep(1000);
  try {
    const response = await fetch(`${environment.GITHUB_API_URL}/labels`,{
      headers: {
        Authorization: `token ${environment.GITHUB_TOKEN}`
      }
    });
    if (!response.ok) throw 'Error al obtener los labels';
    return await response.json() as GetLabelInterface[];
  }catch (e) {
    console.log(e)
    throw 'Error al obtener los labels'
  }

};
