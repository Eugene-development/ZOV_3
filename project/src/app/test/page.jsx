import { request } from 'graphql-request';
import { ALL_RUBRIC } from './graphql'
import Counter from './components/counter';

const getTestData = async () => {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_API;
	const variables = {
		key: process.env.NEXT_PUBLIC_KEY
	};
  return await request(url, ALL_RUBRIC, variables);
}


// export const metadata = {
//   title: 'Тест Тайтл',
//   description: 'овылтиджывьищывпльи',
// }

export async function generateMetadata({ params, searchParams }) {
  return { title: '...' };
}

export default async function Test() {
  const data = await getTestData();

  return (
    <>
        <p>{data.rubric[0].value}</p>
        <h1 className="font-serif text-3xl font-bold underline text-green-500">
      GGGGGG2
    </h1>
<Counter/>
    </>
  )
}