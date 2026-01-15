import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Bem-vindo ao Meu Portfólio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Este é um espaço para mostrar meus projetos e habilidades em desenvolvimento web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Projeto 1</CardTitle>
              <CardDescription className="text-gray-400">Um projeto incrível que desenvolvi</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Descrição detalhada do projeto e tecnologias utilizadas.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Projeto 2</CardTitle>
              <CardDescription className="text-gray-400">Outro projeto interessante</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Detalhes sobre este projeto e seus recursos únicos.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Projeto 3</CardTitle>
              <CardDescription className="text-gray-400">Mais um projeto legal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Informações sobre este projeto e seu impacto.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Ver mais projetos
          </Button>
        </div>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;