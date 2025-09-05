import { guitard } from "@/components/icons";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="px-0 py-0 h-auto w-full flex flex-col items-center justify-center">
      {/* Banner Section */}
      <section className="bg-[#889F31] h-auto w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center text-center text-[18px] font-bold mt-5">
          <h3 className="text-white">Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</h3>
        </div>
        
        {/* Main Heading */}
        <div className="flex items-center justify-around w-full px-20 py-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-[32px] font-bold text-center mt-10 mb-5">
                    Prime bac 2025 : jusqu'à 160€ offerts
                </h1>
                <span className="text-white text-[20px]">Ceux qui ont bien gratté méritent d'être récompensés !</span>
                <button className="mt-5 mb-10 bg-[#0F228B] w-[200px] cursor-pointer text-white font-bold px-6 py-3 rounded transition duration-300 hover:bg-[#0F228B]/90">
                    Demander la prime
                </button>
            </div>
            <div>
                <Image
                    src={guitard}
                    alt="Guitare"
                    width={300}
                    height={300}
                />
            </div>
        </div>
      </section>

      {/* Section supplémentaire pour tester le scroll */}
      <section className="py-20 px-20 w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Nos services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Compte bancaire</h3>
            <p className="text-gray-600">Gérez vos finances au quotidien avec nos comptes adaptés à tous vos besoins.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Crédit immobilier</h3>
            <p className="text-gray-600">Réalisez vos projets immobiliers avec nos solutions de financement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibent mb-4">Assurance</h3>
            <p className="text-gray-600">Protégez ce qui vous tient à cœur avec nos solutions d'assurance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}