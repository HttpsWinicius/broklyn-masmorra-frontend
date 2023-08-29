// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Alunos',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Vídeo Aula',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Brabo Jiu-Jitsu',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Projeto Brabinho',
    path: '/dashboard/blog',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Calendário',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  }
];

export default navConfig;
