import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, GraduationCap, Smartphone, Database, Globe, GitBranch } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header com avatar e título */}
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-blue-500">
            <AvatarImage src="/placeholder.svg" alt="NoteDarckBr" />
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            NoteDarckBr
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor Full Stack | Especialista em Java, React Native e Tecnologias Web
          </p>
        </div>

        {/* Seção Sobre Mim */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
            <Code className="mr-2" /> Sobre Mim
          </h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <p className="text-gray-300 mb-4">
                Sou um desenvolvedor apaixonado por tecnologia, com experiência em criação de aplicações web e mobile.
                Tenho habilidades em diversas linguagens e frameworks, sempre buscando aprender novas tecnologias e
                melhorar minhas habilidades.
              </p>
              <p className="text-gray-300">
                Meu objetivo é criar soluções inovadoras que resolvam problemas reais, com código limpo e bem estruturado.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Seção Escolaridade */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
            <GraduationCap className="mr-2" /> Escolaridade
          </h2>
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Bacharelado em Ciência da Computação</CardTitle>
                <CardDescription className="text-gray-400">Universidade Federal de Tecnologia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">2018 - 2022</p>
                <p className="text-gray-300 mt-2">Formação completa em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Curso Técnico em Informática</CardTitle>
                <CardDescription className="text-gray-400">Escola Técnica Estadual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">2015 - 2017</p>
                <p className="text-gray-300 mt-2">Fundamentos de programação, redes de computadores e manutenção de hardware.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção Habilidades */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-400 flex items-center">
            <Smartphone className="mr-2" /> Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Linguagens de Programação */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">Linguagens de Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">Java</Badge>
                  <Badge variant="secondary" className="bg-yellow-900 text-yellow-200">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-blue-800 text-blue-200">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-200">Python</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-200">C#</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks e Bibliotecas */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Frameworks e Bibliotecas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-cyan-900 text-cyan-200">React Native</Badge>
                  <Badge variant="secondary" className="bg-blue-800 text-blue-200">React.js</Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-200">Spring Boot</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-200">Node.js</Badge>
                  <Badge variant="secondary" className="bg-red-900 text-red-200">Express</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Bancos de Dados */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-indigo-400 flex items-center">
                  <Database className="mr-2" /> Bancos de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-900 text-orange-200">MySQL</Badge>
                  <Badge variant="secondary" className="bg-green-800 text-green-200">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-green-700 text-green-100">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-red-900 text-red-200">Firebase</Badge>
                  <Badge variant="secondary" className="bg-purple-800 text-purple-200">SQLite</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Ferramentas e Tecnologias */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-pink-400 flex items-center">
                  <Globe className="mr-2" /> Ferramentas e Tecnologias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-200">Git</Badge>
                  <Badge variant="secondary" className="bg-blue-700 text-blue-200">Docker</Badge>
                  <Badge variant="secondary" className="bg-purple-700 text-purple-200">AWS</Badge>
                  <Badge variant="secondary" className="bg-red-700 text-red-200">GitHub Actions</Badge>
                  <Badge variant="secondary" className="bg-yellow-700 text-yellow-200">Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção Projetos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-orange-400 flex items-center">
            <GitBranch className="mr-2" /> Projetos Recentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">App de Delivery</CardTitle>
                <CardDescription className="text-gray-400">React Native + Firebase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Aplicativo mobile para delivery de alimentos com sistema de pagamento integrado e rastreamento em tempo real.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">React Native</Badge>
                  <Badge variant="secondary" className="bg-red-900 text-red-200">Firebase</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-200">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400">Sistema de Gestão</CardTitle>
                <CardDescription className="text-gray-400">Spring Boot + React</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Plataforma web para gestão empresarial com autenticação JWT, relatórios e dashboard analítico.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-purple-900 text-purple-200">Spring Boot</Badge>
                  <Badge variant="secondary" className="bg-blue-800 text-blue-200">React</Badge>
                  <Badge variant="secondary" className="bg-orange-900 text-orange-200">MySQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção Contato */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contato</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:contato@notedarckbr.com" className="flex items-center">
                <Code className="mr-2" /> Email
              </a>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <a href="https://github.com/NoteDarckBr" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <GitBranch className="mr-2" /> GitHub
              </a>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <a href="https://linkedin.com/in/notedarckbr" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <GraduationCap className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;