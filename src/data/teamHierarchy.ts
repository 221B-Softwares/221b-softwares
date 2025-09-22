import { TeamNode } from '@/types'

export const teamTree: TeamNode[] = [
  {
    id: '1',
    designation: 'ceo',
    name: 'Kashif Khan',
    title: 'Chief Executive Officer',
    photo: '/team/kashif.jpeg',
  },
  {
    id: '2',
    designation: 'cto',
    name: 'Huzaifah Tariq',
    title: 'Chief Technology Officer',
    photo: '/team/huzaifah.jpg',
    children: [
      {
        id: '3',
        designation: 'frontend-lead',
        name: 'Mustaqeem Tariq',
        title: 'Frontend Lead',
        photo: '/team/mustaqeem.jpeg',
        children: [
          {
            id: '2',
            designation: 'frontend-dev-1',
            name: 'Huzaifah Tariq',
            title: 'Frontend Developer',
            photo: '/team/huzaifah.jpg',
          },
          {
            id: '4',
            designation: 'frontend-dev-2',
            name: 'Ali Taimoor',
            title: 'Frontend Developer',
            photo: '/team/ali.jpeg',
          },
          {
            id: '5',
            designation: 'frontend-dev-3',
            name: 'Awais Ali',
            title: 'Frontend Developer',
            photo: '/team/awais.png',
          },
        ],
      },
      {
        id: '2',
        designation: 'backend-lead',
        name: 'Huzaifah Tariq',
        title: 'Backend/DB Lead',
        photo: '/team/huzaifah.jpg',
        children: [
          {
            id: '1',
            designation: 'backend-dev-1',
            name: 'Kashif Khan',
            title: 'Backend Developer',
            photo: '/team/kashif.jpeg',
          },
          {
            id: '6',
            designation: 'backend-dev-2',
            name: 'Areeb Ahmad',
            title: 'Backend Developer',
            photo: '/team/areeb.jpeg',
          },
          {
            id: '7',
            designation: 'backend-dev-3',
            name: 'Babar Hussain',
            title: 'Backend Developer',
            photo: '/team/babar.jpeg',
          },
        ],
      },
      {
        id: '2',
        designation: 'mobile-lead',
        name: 'Huzaifah Tariq',
        title: 'Mobile Dev Lead',
        photo: '/team/huzaifah.jpg',
        children: [
          {
            id: '8',
            designation: 'mobile-dev-1',
            name: 'Jawad Zaheer',
            title: 'Mobile Developer',
            photo: '/team/jawad.jpeg',
          },
        ],
      },
      {
        id: '1',
        designation: 'devops-lead',
        name: 'Kashif Khan',
        title: 'DevOps Lead',
        photo: '/team/kashif.jpeg',
        children: [
          {
            id: '9',
            designation: 'devops-1',
            name: 'Haseeb Arif',
            title: 'DevOps Specialist',
            photo: '/team/haseeb.jpeg',
          },
        ],
      },
    ],
  },
]
