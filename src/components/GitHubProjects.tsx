"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, Star, Code, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
  visibility: string;
}

// Projetos de fallback caso a API falhe
const fallbackProjects: Repository[] = [
  {
    id: 1,
    name: "Portfólio Pessoal",
    description: "Meu portfólio pessoal mostrando meus projetos e habilidades como desenvolvedor full stack",
    html_url: "https://github.com/NoteDarckBr/portfolio",
    stargazers_count: 12,
    language: "TypeScript",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  },
  {
    id: 2,
    name: "Sistema de Gestão Escolar",
    description: "Sistema completo para gestão escolar com React, Node.js e PostgreSQL. Inclui módulos de matrículas, notas e frequência.",
    html_url: "https://github.com/NoteDarckBr/sistema-gestao-escolar",
    stargazers_count: 8,
    language: "JavaScript",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  },
  {
    id: 3,
    name: "App de Tarefas Mobile",
    description: "Aplicativo mobile para gerenciamento de tarefas desenvolvido com React Native e Firebase para autenticação e banco de dados.",
    html_url: "https://github.com/NoteDarckBr/app-tarefas",
    stargazers_count: 5,
    language: "JavaScript",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  },
  {
    id: 4,
    name: "API REST com Java Spring Boot",
    description: "API RESTful desenvolvida com Java Spring Boot para um sistema de gerenciamento de produtos com autenticação JWT.",
    html_url: "https://github.com/NoteDarckBr/api-springboot",
    stargazers_count: 7,
    language: "Java",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  },
  {
    id: 5,
    name: "E-commerce com React",
    description: "Loja virtual completa com carrinho de compras, checkout e integração com PagSeguro. Desenvolvido com React e Styled Components.",
    html_url: "https://github.com/NoteDarckBr/ecommerce-react",
    stargazers_count: 10,
    language: "TypeScript",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  },
  {
    id: 6,
    name: "Jogo da Memória",
    description: "Jogo da memória desenvolvido com HTML, CSS e JavaScript puro. Projeto para praticar lógica de programação e manipulação do DOM.",
    html_url: "https://github.com/NoteDarckBr/jogo-memoria",
    stargazers_count: 3,
    language: "JavaScript",
    fork: false,
    updated_at: new Date().toISOString(),
    visibility: "public"
  }
];

export const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/NoteDarckBr/repos?sort=updated&per_page=6');

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        // Filtrar apenas repositórios não fork e ordenar por estrelas
        const filteredRepos = data
          .filter((repo: Repository) => !repo.fork)
          .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(filteredRepos);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Não foi possível carregar os projetos do GitHub. Mostrando projetos de exemplo.');
        // Usar projetos de fallback
        setRepos(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-6 p-4 bg-yellow-900/50 border border-yellow-700 rounded-lg">
          <p className="text-yellow-200 flex items-center">
            <Eye className="mr-2" /> {error}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <Card key={repo.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-purple-400">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.name}
                  </a>
                </CardTitle>
                <Badge variant="secondary" className="bg-yellow-900 text-yellow-200">
                  {repo.visibility}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                {repo.description || 'Sem descrição disponível'}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                    {repo.language}
                  </Badge>
                )}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-4 h-4 mr-1 text-blue-400" />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};