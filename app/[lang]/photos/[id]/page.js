import PhotoDetails from "@/components/PhotoDetails";

export default function PhotoDetailsPage({params}) {

    
    const {id, lang} = params
    return (
        <PhotoDetails id={id} lang={lang}/>
    )
}