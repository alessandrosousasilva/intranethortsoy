import { Monitor, BarChart3, Mail, Database, ExternalLink, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SistemasPage = () => {
  const sistemas = [
    {
      id: 1,
      name: 'BI - Business Intelligence',
      description: 'Dashboard executivo com indicadores de performance e relatórios gerenciais',
      icon: BarChart3,
      url: 'https://bi.hortsoy.com.br',
      status: 'online',
      category: 'Análise',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'SIAGRI',
      description: 'Sistema integrado de gestão agropecuária para controle de operações',
      icon: Database,
      url: 'https://siagri.hortsoy.com.br',
      status: 'online',
      category: 'Gestão',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Email Corporativo',
      description: 'Acesso ao webmail e configurações de email corporativo',
      icon: Mail,
      url: 'https://mail.hortsoy.com.br',
      status: 'online',
      category: 'Comunicação',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'Sistema de Vendas',
      description: 'Plataforma de gestão comercial e acompanhamento de vendas',
      icon: Zap,
      url: 'https://vendas.hortsoy.com.br',
      status: 'online',
      category: 'Comercial',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      name: 'Portal RH',
      description: 'Sistema de recursos humanos para gestão de colaboradores',
      icon: Shield,
      url: 'https://rh.hortsoy.com.br',
      status: 'manutencao',
      category: 'RH',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      name: 'Sistema Financeiro',
      description: 'Controle financeiro, contas a pagar e receber',
      icon: Monitor,
      url: 'https://financeiro.hortsoy.com.br',
      status: 'online',
      category: 'Financeiro',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'online':
        return <Badge className="bg-green-100 text-green-800">Online</Badge>;
      case 'manutencao':
        return <Badge className="bg-yellow-100 text-yellow-800">Manutenção</Badge>;
      case 'offline':
        return <Badge className="bg-red-100 text-red-800">Offline</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Desconhecido</Badge>;
    }
  };

  const openSystem = (url, status) => {
    if (status === 'online') {
      window.open(url, '_blank');
    } else {
      alert('Sistema temporariamente indisponível');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Monitor className="h-8 w-8 text-blue-500" />
          Sistemas
        </h1>
        <p className="text-gray-600">Acesse os sistemas corporativos da Hortsoy</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Online</p>
                <p className="text-2xl font-bold text-white">
                  {sistemas.filter(s => s.status === 'online').length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Manutenção</p>
                <p className="text-2xl font-bold text-white">
                  {sistemas.filter(s => s.status === 'manutencao').length}
                </p>
              </div>
              <Monitor className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Total</p>
                <p className="text-2xl font-bold text-white">{sistemas.length}</p>
              </div>
              <Database className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Categorias</p>
                <p className="text-2xl font-bold text-white">6</p>
              </div>
              <BarChart3 className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid de Sistemas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sistemas.map((sistema) => {
          const IconComponent = sistema.icon;
          
          return (
            <Card key={sistema.id} className="system-card card-hover cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${sistema.color} rounded-lg flex items-center justify-center mb-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  {getStatusBadge(sistema.status)}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {sistema.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{sistema.description}</p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {sistema.category}
                  </Badge>
                  
                  <Button 
                    size="sm"
                    onClick={() => openSystem(sistema.url, sistema.status)}
                    disabled={sistema.status !== 'online'}
                    className={`
                      bg-gradient-to-r ${sistema.color} hover:opacity-90 
                      disabled:opacity-50 disabled:cursor-not-allowed
                      group-hover:scale-105 transition-transform
                    `}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Informações Adicionais */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Informações Importantes</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Todos os sistemas utilizam autenticação única (SSO)</li>
                <li>• Em caso de problemas, entre em contato com o suporte técnico</li>
                <li>• Mantenha suas credenciais sempre seguras</li>
                <li>• Sistemas em manutenção serão atualizados automaticamente</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SistemasPage;

