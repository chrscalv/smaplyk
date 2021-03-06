import DefaultLayout from "../component/layout/DefaultLayout";
import HeroPart from "../component/PageComponents/IndexPage/HeroPart";
import VisiMisiPart from "../component/PageComponents/IndexPage/VisiMisiPart";
import FasilitasPart from "../component/PageComponents/IndexPage/FasilitasPart";
import AchievementPart from "../component/PageComponents/IndexPage/AchievementPart";
import CardArtikel from "../component/PageComponents/Others/CardArtikel";

export default function Index() {
  return (
    <DefaultLayout pageTitle="Home">
      <>
        <HeroPart />

        <VisiMisiPart />

        <FasilitasPart />

        <AchievementPart />

        <section className="container mx-auto text-center py-6 mb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
            Artikel
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <h3 className="my-4 text-3xl leading-tight">
            Main Hero Message to sell yourself!
          </h3>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            <CardArtikel/>

            <CardArtikel/>

            <CardArtikel/>

            <CardArtikel/>
          </div>
          
        </section>
      </>
    </DefaultLayout>
  );
}
