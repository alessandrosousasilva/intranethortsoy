import { GraduationCap, BookOpen, Video, FileText, ExternalLink, Download, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const UniversidadePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const manuais = [
    {
      id: 1,
      title: 'Manual do Sistema SIAGRI',
      description: 'Guia completo para utilização do sistema de gestão agropecuária',
      type: 'PDF',
      category: 'Sistemas',
      size: '2.5 MB',
      lastUpdate: '15/07/2024',
      url: 'https://onedrive.hortsoy.com.br/manuais/siagri.pdf'
    },
    {
      id: 2,
      title: 'Procedimentos de Segurança',
      description: 'Normas e procedimentos de segurança no trabalho',
      type: 'PDF',
      category: 'Segurança',
      size: '1.8 MB',
      lastUpdate: '10/07/2024',
      url: 'https://onedrive.hortsoy.com.br/manuais/seguranca.pdf'
    },
    {
      id: 3,
      title: 'Treinamento Vendas',
      description: 'Material de treinamento para equipe comercial',
      type: 'Video',
      category: 'Comercial',
      size: '45 min',
      lastUpdate: '20/07/2024',
      url: 'https://onedrive.hortsoy.com.br/videos/vendas.mp4'
    },
    {
      id: 4,
      title: 'Manual de Qualidade',
      description: 'Processos e procedimentos de controle de qualidade',
      type: 'PDF',
      category: 'Qualidade',
      size: '3.2 MB',
      lastUpdate: '05/07/2024',
      url: 'https://onedrive.hortsoy.com.br/manuais/qualidade.pdf'
    },
    {
      id: 5,
      title: 'Integração de Novos Colaboradores',
      description: 'Guia de boas-vindas e integração para novos funcionários',
      type: 'PDF',
      category: 'RH',
      size: '1.5 MB',
      lastUpdate: '22/07/2024',
      url: 'https://onedrive.hortsoy.com.br/manuais/integracao.pdf'
    },
    {
      id: 6,
      title: 'Curso de Excel Avançado',
      description: 'Treinamento completo de Excel para análise de dados',
      type: 'Video',
      category: 'Tecnologia',
      size: '2h 30min',
      lastUpdate: '18/07/2024',
      url: 'https://onedrive.hortsoy.com.br/videos/excel.mp4'
    }
  ];

  const categorias = ['Todos', 'Sistemas', 'Segurança', 'Comercial', 'Qualidade', 'RH', 'Tecnologia'];
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const manuaisFiltrados = manuais.filter(manual => {
    const matchesSearch = manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoriaAtiva === 'Todos' || manual.category === categoriaAtiva;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'Video':
        return <Video className="h-5 w-5 text-blue-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeBadge = (type) => {
    const colors = {
      'PDF': 'bg-red-100 text-red-800',
      'Video': 'bg-blue-100 text-blue-800'
    };
    return <Badge className={colors[type] || 'bg-gray-100 text-gray-800'}>{type}</Badge>;
  };

  const openManual = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-purple-500" />
          Universidade Hortsoy
        </h1>
        <p className="text-gray-600">Centro de conhecimento e treinamentos</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Total Manuais</p>
                <p className="text-2xl font-bold text-white">{manuais.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Vídeos</p>
                <p className="text-2xl font-bold text-white">
                  {manuais.filter(m => m.type === 'Video').length}
                </p>
              </div>
              <Video className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">PDFs</p>
                <p className="text-2xl font-bold text-white">
                  {manuais.filter(m => m.type === 'PDF').length}
                </p>
              </div>
              <FileText className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Categorias</p>
                <p className="text-2xl font-bold text-white">{categorias.length - 1}</p>
              </div>
              <GraduationCap className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Busca e Filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar manuais e treinamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={categoriaAtiva === categoria ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaAtiva(categoria)}
              className={categoriaAtiva === categoria ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {categoria}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Manuais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manuaisFiltrados.map((manual) => (
          <Card key={manual.id} className="card-hover cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(manual.type)}
                  {getTypeBadge(manual.type)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {manual.category}
                </Badge>
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {manual.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">{manual.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Tamanho: {manual.size}</span>
                <span>Atualizado: {manual.lastUpdate}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm"
                  onClick={() => openManual(manual.url)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Abrir
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => openManual(manual.url)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Informações sobre OneDrive */}
      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <GraduationCap className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Acesso ao OneDrive</h3>
              <p className="text-purple-800 text-sm mb-3">
                Todos os manuais e materiais de treinamento estão armazenados no OneDrive corporativo da Hortsoy.
              </p>
              <Button 
                size="sm"
                onClick={() => window.open('https://onedrive.hortsoy.com.br', '_blank')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Acessar OneDrive
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UniversidadePage;

