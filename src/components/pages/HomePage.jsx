import { useState } from 'react';
import { Heart, MessageCircle, Share2, Filter, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HomePage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ana (Pessoas)',
      authorRole: 'Recursos Humanos',
      time: 'há 2 dias',
      title: 'Assinatura do Ponto',
      content: 'Novo sistema de assinatura de ponto implementado em todas as filiais. Confira as instruções no manual.',
      image: '/api/placeholder/600/300',
      likes: 17,
      comments: 5,
      category: 'Comunicado',
      location: 'Matriz'
    },
    {
      id: 2,
      author: 'Carlos Silva',
      authorRole: 'Gerente Comercial',
      time: 'há 1 dia',
      title: 'Resultados do Trimestre',
      content: 'Excelentes resultados alcançados no último trimestre. Parabéns a toda equipe pelo empenho!',
      likes: 23,
      comments: 8,
      category: 'Resultados',
      location: 'Filial SP'
    },
    {
      id: 3,
      author: 'Maria Santos',
      authorRole: 'Coordenadora de Marketing',
      time: 'há 3 horas',
      title: 'Nova Campanha de Marketing',
      content: 'Lançamento da nova campanha "Hortsoy Sustentável". Materiais disponíveis na seção de documentos.',
      likes: 12,
      comments: 3,
      category: 'Marketing',
      location: 'Matriz'
    }
  ]);

  const [filter, setFilter] = useState('todos');

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const filteredPosts = filter === 'todos' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === filter);

  return (
    <div className="space-y-6">
      {/* Header da Timeline */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Timeline</h1>
          <p className="text-gray-600">Acompanhe as últimas novidades da Hortsoy</p>
        </div>
        
        {/* Filtros */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="todos">Todos</option>
            <option value="comunicado">Comunicados</option>
            <option value="resultados">Resultados</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>

      {/* Posts da Timeline */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="timeline-post card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.time}</span>
                      <MapPin className="h-3 w-3 ml-2" />
                      <span>{post.location}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {post.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
              
              {post.image && (
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
              
              {/* Ações do Post */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
                  >
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-500"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Compartilhar</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

