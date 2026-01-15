import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Briefcase, GraduationCap, Code, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Avatar className="w-32 h-32 mb-6">
              <AvatarImage src="/placeholder.svg" alt="Carlos Gabriel" />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">Carlos Gabriel Martins Coenga</h1>
            <p className="text-xl text-muted-foreground mb-6">Frontend Developer</p>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/NoteDarck" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Sobre Mim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sou um desenvolvedor frontend apaixonado por criar interfaces bonitas e funcionais.
                  Com experiência em React, TypeScript e design responsivo, estou sempre buscando
                  aprender novas tecnologias e melhorar minhas habilidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Skills Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            React
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            TypeScript
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            JavaScript
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            HTML/CSS
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            Tailwind CSS
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            Git
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            Responsive Design
          </Badge>
          <Badge variant="secondary" className="justify-center">
            <Code className="h-4 w-4 mr-2" />
            UI/UX
          </Badge>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Experience Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Experiência</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Desenvolvedor Frontend</CardTitle>
                  <p className="text-muted-foreground">Empresa XYZ</p>
                </div>
                <Badge variant="outline">2022 - Presente</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Desenvolvimento de interfaces de usuário modernas e responsivas usando React e TypeScript.
                Colaboração com designers e desenvolvedores backend para criar experiências de usuário excepcionais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Estágio em Desenvolvimento Web</CardTitle>
                  <p className="text-muted-foreground">Startup ABC</p>
                </div>
                <Badge variant="outline">2020 - 2022</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Aprendizado de tecnologias web modernas e participação em projetos reais.
                Desenvolvimento de componentes reutilizáveis e manutenção de código existente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Education Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Educação</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Bacharelado em Ciência da Computação</CardTitle>
                  <p className="text-muted-foreground">Universidade Federal</p>
                </div>
                <Badge variant="outline">2018 - 2022</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Graduação com foco em desenvolvimento de software, algoritmos e estruturas de dados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Projects Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfólio Pessoal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Um portfólio moderno para apresentar meus projetos e habilidades.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Código
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E-commerce</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Uma loja online completa com carrinho de compras e checkout.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Stripe</Badge>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Código
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;