import { getDictionary } from "./dictionaries";

export default async function Home({params}) {

  const {lang} = params;

  const dictionary = await getDictionary(lang)
  return (
    <div>{dictionary.followers}</div>
  );
}
