#!/bin/bash

# Script para deploy no GitHub Pages
# 1. Faça a build do projeto
# 2. Faça o push para o branch gh-pages

# Primeiro, faça a build
npm run build

# Verifique se a build foi bem-sucedida
if [ $? -ne 0 ]; then
  echo "Erro na build. Corrija os erros antes de fazer o deploy."
  exit 1
fi

# Inicialize o repositório git se ainda não estiver inicializado
if [ ! -d ".git" ]; then
  git init
  git add .
  git commit -m "Initial commit"
fi

# Crie o branch gh-pages se não existir
if ! git show-ref --quiet refs/heads/gh-pages; then
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Initializing gh-pages branch"
  git checkout main
fi

# Faça o deploy para o GitHub Pages
git subtree push --prefix dist origin gh-pages

echo "Deploy concluído com sucesso!"