import Counter from './components/counter';
import { useRequest } from './api/requests';
const { getTest } = useRequest

// export const metadata = {
//   title: 'Тест Тайтл',
//   description: 'овылтиджывьищывпльи',
// }

export async function generateMetadata({ params, searchParams }) {
  return { title: '...' };
}

export default async function Test() {
  const data = await getTest();

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