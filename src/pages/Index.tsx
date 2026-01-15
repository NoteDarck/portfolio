import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GitHub, Linkedin, Mail, Code, Book, GraduationCap, Smartphone, Database, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header com avatar e informações pessoais */}
        <div className="text-center mb-16">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-blue-500">
            <AvatarImage src="/placeholder.svg" alt="NoteDarckBr" />
            <AvatarFallback>ND</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            NoteDarckBr
          </h1>

          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Desenvolvedor Full Stack com paixão por criar soluções inovadoras e eficientes.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/NoteDarckBr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <GitHub size={24} />
            </a>
            <a href="mailto:seuemail@example.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/NoteDarckBr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Seção Sobre Mim */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Sobre Mim</h2>
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center">
                <Code className="mr-2" /> Quem sou eu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Sou um desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e aprendizados.
                Tenho experiência em desenvolvimento web e mobile, com foco em criar soluções que impactam positivamente
                a vida das pessoas.
              </p>
              <p className="text-gray-300">
                Meu objetivo é continuar evoluindo como profissional, contribuindo para projetos inovadores e
                colaborando com equipes talentosas.
              </p>
            </CardContent>
          </Card>

          {/* Educação */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <GraduationCap className="mr-2" /> Educação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <Book className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Bacharelado em Ciência da Computação</h3>
                    <p className="text-gray-400">Universidade Federal do ABC (UFABC) • 2018 - 2022</p>
                    <p className="text-gray-300 mt-2">
                      Formação sólida em algoritmos, estruturas de dados, engenharia de software e sistemas distribuídos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Técnico em Informática</h3>
                    <p className="text-gray-400">ETEC • 2015 - 2017</p>
                    <p className="text-gray-300 mt-2">
                      Base técnica em programação, redes de computadores e manutenção de hardware.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção Habilidades */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Habilidades Técnicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Java */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center">
                  <Code className="mr-2" /> Java
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-orange-900 text-orange-300">Spring Boot</Badge>
                  <Badge variant="secondary" className="bg-orange-900 text-orange-300">Hibernate</Badge>
                  <Badge variant="secondary" className="bg-orange-900 text-orange-300">JUnit</Badge>
                  <Badge variant="secondary" className="bg-orange-900 text-orange-300">Maven</Badge>
                </div>
                <p className="text-gray-300 mt-4">
                  Experiência em desenvolvimento de APIs RESTful, sistemas empresariais e aplicações escaláveis.
                </p>
              </CardContent>
            </Card>

            {/* React Native */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Smartphone className="mr-2" /> React Native
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Expo</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Redux</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Navigation</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Firebase</Badge>
                </div>
                <p className="text-gray-300 mt-4">
                  Desenvolvimento de aplicativos móveis multiplataforma com interface nativa e alta performance.
                </p>
              </CardContent>
            </Card>

            {/* JavaScript/TypeScript */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Code className="mr-2" /> JavaScript/TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-yellow-900 text-yellow-300">React</Badge>
                  <Badge variant="secondary" className="bg-yellow-900 text-yellow-300">Node.js</Badge>
                  <Badge variant="secondary" className="bg-yellow-900 text-yellow-300">Express</Badge>
                  <Badge variant="secondary" className="bg-yellow-900 text-yellow-300">Next.js</Badge>
                </div>
                <p className="text-gray-300 mt-4">
                  Desenvolvimento full-stack com foco em aplicações web modernas e responsivas.
                </p>
              </CardContent>
            </Card>

            {/* Bancos de Dados */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Database className="mr-2" /> Bancos de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-green-900 text-green-300">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-300">MySQL</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-300">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-green-900 text-green-300">Firebase</Badge>
                </div>
                <p className="text-gray-300 mt-4">
                  Modelagem de dados, otimização de consultas e integração com aplicações.
                </p>
              </CardContent>
            </Card>

            {/* Outras Tecnologias */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center">
                  <Globe className="mr-2" /> Outras Tecnologias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-purple-900 text-purple-300">Git</Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-300">Docker</Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-300">AWS</Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-300">Tailwind CSS</Badge>
                </div>
                <p className="text-gray-300 mt-4">
                  Ferramentas e tecnologias complementares para desenvolvimento e deploy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção Projetos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Projetos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-red-400">Sistema de Gestão Escolar</CardTitle>
                <CardDescription className="text-gray-400">Java + Spring Boot + React</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Plataforma completa para gestão acadêmica com controle de matrículas, notas e frequência.
                </p>
                <div className="mt-4 space-x-2">
                  <Badge variant="secondary" className="bg-red-900 text-red-300">Backend</Badge>
                  <Badge variant="secondary" className="bg-red-900 text-red-300">Frontend</Badge>
                  <Badge variant="secondary" className="bg-red-900 text-red-300">API REST</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400">App de Delivery</CardTitle>
                <CardDescription className="text-gray-400">React Native + Firebase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Aplicativo mobile para delivery de alimentos com geolocalização e pagamento integrado.
                </p>
                <div className="mt-4 space-x-2">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Mobile</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Firebase</Badge>
                  <Badge variant="secondary" className="bg-blue-900 text-blue-300">Maps</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Interessado em trabalhar juntos?</h3>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="mr-2" size={16} />
              Entre em Contato
            </Button>
            <Button variant="outline" className="border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800">
              <GitHub className="mr-2" size={16} />
              Ver no GitHub
            </Button>
          </div>
        </div>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;