import { useState } from 'react';
import { Cake, Gift, Calendar, MapPin, Mail, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AniversariosPage = () => {
  const [aniversariantes] = useState([
    {
      id: 1,
      name: 'Kassio Santos Oliveira',
      role: 'Gerente Negócios Filial II - ADMINISTRATIVO',
      location: 'Goiatuba',
      birthday: '24/07',
      age: 32,
      email: 'kassio.santos@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: true
    },
    {
      id: 2,
      name: 'Renan da Cunha Pereira',
      role: 'Assistente Logística II - OPERAÇÕES',
      location: 'Nova Odessa',
      birthday: '24/07',
      age: 28,
      email: 'renan.cunha@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: true
    },
    {
      id: 3,
      name: 'Luiz Henrique Barruchelo F da Silva',
      role: 'Consultor Técnico Vendas II - COM',
      location: 'LOJA RIO PRETO',
      birthday: '24/07',
      age: 35,
      email: 'luiz.henrique@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: true
    },
    {
      id: 4,
      name: 'ROSELY NASATO',
      role: 'Coordenador Administração V',
      location: 'Matriz',
      birthday: '25/07',
      age: 45,
      email: 'rosely.nasato@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: false
    },
    {
      id: 5,
      name: 'Amanda Aparecida Pereira Duarte',
      role: 'Assistente Administrativo I - A',
      location: 'Filial SP',
      birthday: '26/07',
      age: 26,
      email: 'amanda.duarte@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: false
    },
    {
      id: 6,
      name: 'Elisangela Fernanda Gimenez',
      role: 'Vendedor Agropecuária I - CO',
      location: 'Filial GO',
      birthday: '26/07',
      age: 38,
      email: 'elisangela.gimenez@hortsoy.com.br',
      photo: '/api/placeholder/80/80',
      isToday: false
    }
  ]);

  const [filter, setFilter] = useState('todos');

  const filteredAniversariantes = filter === 'todos' 
    ? aniversariantes 
    : filter === 'hoje'
    ? aniversariantes.filter(person => person.isToday)
    : aniversariantes.filter(person => !person.isToday);

  const sendMessage = (person) => {
    // Simular envio de mensagem
    alert(`Mensagem de parabéns enviada para ${person.name}!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Cake className="h-8 w-8 text-pink-500" />
            Aniversários
          </h1>
          <p className="text-gray-600">Celebre com a equipe Hortsoy</p>
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
            <option value="hoje">Hoje</option>
            <option value="proximos">Próximos</option>
          </select>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="birthday-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Hoje</p>
                <p className="text-2xl font-bold text-white">
                  {aniversariantes.filter(p => p.isToday).length}
                </p>
              </div>
              <Cake className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Esta Semana</p>
                <p className="text-2xl font-bold text-white">7</p>
              </div>
              <Calendar className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Este Mês</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <Gift className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Aniversariantes */}
      <div className="space-y-4">
        {filteredAniversariantes.map((person) => (
          <Card key={person.id} className={`card-hover ${person.isToday ? 'ring-2 ring-pink-500' : ''}`}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {person.name.split(' ').map(n => n.charAt(0)).join('').substring(0, 2)}
                      </span>
                    </div>
                    {person.isToday && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                        <Cake className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{person.name}</h3>
                    <p className="text-gray-600">{person.role}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{person.birthday}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{person.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {person.isToday && (
                    <Badge className="bg-pink-100 text-pink-800 border-pink-200">
                      Hoje!
                    </Badge>
                  )}
                  <Button 
                    onClick={() => sendMessage(person)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Deixe sua mensagem
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

export default AniversariosPage;

