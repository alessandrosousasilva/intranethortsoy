import { useState } from 'react';
import { FileImage, Image, Download, Eye, Search, Filter, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const DocsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const documentos = [
    {
      id: 1,
      name: 'Assinatura Email - Padrão Hortsoy',
      type: 'image',
      category: 'Assinaturas Email',
      format: 'PNG',
      size: '245 KB',
      lastUpdate: '20/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/assinatura-padrao.png'
    },
    {
      id: 2,
      name: 'Plano de Fundo - Reuniões',
      type: 'image',
      category: 'Planos de Fundo',
      format: 'JPG',
      size: '1.2 MB',
      lastUpdate: '18/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/fundo-reunioes.jpg'
    },
    {
      id: 3,
      name: 'Comunicado - Férias Coletivas',
      type: 'document',
      category: 'Comunicados',
      format: 'PDF',
      size: '180 KB',
      lastUpdate: '15/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/comunicado-ferias.pdf'
    },
    {
      id: 4,
      name: 'Atualização Sistema SIAGRI',
      type: 'document',
      category: 'Atualizações',
      format: 'PDF',
      size: '320 KB',
      lastUpdate: '22/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/atualizacao-siagri.pdf'
    },
    {
      id: 5,
      name: 'Assinatura Email - Gerência',
      type: 'image',
      category: 'Assinaturas Email',
      format: 'PNG',
      size: '280 KB',
      lastUpdate: '19/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/assinatura-gerencia.png'
    },
    {
      id: 6,
      name: 'Plano de Fundo - Apresentações',
      type: 'image',
      category: 'Planos de Fundo',
      format: 'JPG',
      size: '950 KB',
      lastUpdate: '17/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/fundo-apresentacoes.jpg'
    },
    {
      id: 7,
      name: 'Comunicado - Nova Política',
      type: 'document',
      category: 'Comunicados',
      format: 'PDF',
      size: '420 KB',
      lastUpdate: '21/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/comunicado-politica.pdf'
    },
    {
      id: 8,
      name: 'Foto Evento - Confraternização',
      type: 'image',
      category: 'Fotos Eventos',
      format: 'JPG',
      size: '2.1 MB',
      lastUpdate: '16/07/2024',
      thumbnail: '/api/placeholder/300/200',
      url: '/docs/evento-confraternizacao.jpg'
    }
  ];

  const categorias = [
    'Todos',
    'Assinaturas Email',
    'Planos de Fundo',
    'Comunicados',
    'Atualizações',
    'Fotos Eventos'
  ];

  const documentosFiltrados = documentos.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoriaAtiva === 'Todos' || doc.category === categoriaAtiva;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    return type === 'image' ? <Image className="h-5 w-5 text-blue-500" /> : <FileImage className="h-5 w-5 text-green-500" />;
  };

  const getTypeBadge = (format) => {
    const colors = {
      'PNG': 'bg-blue-100 text-blue-800',
      'JPG': 'bg-green-100 text-green-800',
      'PDF': 'bg-red-100 text-red-800'
    };
    return <Badge className={colors[format] || 'bg-gray-100 text-gray-800'}>{format}</Badge>;
  };

  const downloadFile = (url, name) => {
    // Simular download
    alert(`Download iniciado: ${name}`);
  };

  const previewFile = (url, name) => {
    // Simular preview
    alert(`Abrindo preview: ${name}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <FileImage className="h-8 w-8 text-indigo-500" />
            Docs & Fotos
          </h1>
          <p className="text-gray-600">Documentos, imagens e materiais corporativos</p>
        </div>
        
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Arquivo
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Total Arquivos</p>
                <p className="text-2xl font-bold text-white">{documentos.length}</p>
              </div>
              <FileImage className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Imagens</p>
                <p className="text-2xl font-bold text-white">
                  {documentos.filter(d => d.type === 'image').length}
                </p>
              </div>
              <Image className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Documentos</p>
                <p className="text-2xl font-bold text-white">
                  {documentos.filter(d => d.type === 'document').length}
                </p>
              </div>
              <FileImage className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Categorias</p>
                <p className="text-2xl font-bold text-white">{categorias.length - 1}</p>
              </div>
              <Filter className="h-8 w-8 text-white/80" />
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
              placeholder="Buscar documentos e fotos..."
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
              className={categoriaAtiva === categoria ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              {categoria}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid de Documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documentosFiltrados.map((doc) => (
          <Card key={doc.id} className="card-hover group">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img 
                  src={doc.thumbnail} 
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(doc.type)}
                  {getTypeBadge(doc.format)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {doc.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                  {doc.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{doc.size}</span>
                  <span>{doc.lastUpdate}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => previewFile(doc.url, doc.name)}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
                <Button 
                  size="sm"
                  onClick={() => downloadFile(doc.url, doc.name)}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Informações sobre categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Image className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Assinaturas de Email</h3>
                <p className="text-blue-800 text-sm">
                  Modelos padronizados de assinatura para emails corporativos, disponíveis para diferentes cargos e departamentos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <FileImage className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">Planos de Fundo</h3>
                <p className="text-green-800 text-sm">
                  Backgrounds corporativos para reuniões virtuais, apresentações e materiais institucionais da Hortsoy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocsPage;

